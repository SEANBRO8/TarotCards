import { useState, useCallback, useRef, useEffect } from 'react';
import { TAROT_CARDS, SPREAD_TYPES } from '../data/tarotCards';

const TOTAL_CARDS = TAROT_CARDS.length;
const VISIBLE_HALF = 4;
const CARD_GAP = 1;

export default function DrawCards({ spreadType, onComplete, onBack }) {
  const spread = SPREAD_TYPES[spreadType];
  const [selected, setSelected] = useState([]);
  const [done, setDone] = useState(false);

  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const velocityRef = useRef(0);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const animFrame = useRef(null);
  const hasDragged = useRef(false);

  const currentIndex = Math.round(offset);

  const wrapIndex = (i) => ((i % TOTAL_CARDS) + TOTAL_CARDS) % TOTAL_CARDS;

  // Inertia + snap animation
  useEffect(() => {
    if (isDragging) return;

    let vel = velocityRef.current;

    const animate = () => {
      if (Math.abs(vel) > 0.3) {
        vel *= 0.92;
        setOffset((o) => o + vel);
        velocityRef.current = vel;
        animFrame.current = requestAnimationFrame(animate);
      } else {
        velocityRef.current = 0;
        setOffset((o) => {
          const target = Math.round(o);
          const diff = target - o;
          if (Math.abs(diff) < 0.005) return target;
          const next = o + diff * 0.25;
          animFrame.current = requestAnimationFrame(animate);
          return next;
        });
      }
    };

    animFrame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame.current);
  }, [isDragging]);

  const handlePointerDown = useCallback((e) => {
    if (done) return;
    e.preventDefault();
    cancelAnimationFrame(animFrame.current);
    velocityRef.current = 0;
    setIsDragging(true);
    hasDragged.current = false;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    dragStartX.current = clientX;
    dragStartOffset.current = offset;
    lastX.current = clientX;
    lastTime.current = Date.now();
  }, [done, offset]);

  const handlePointerMove = useCallback((e) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const dx = clientX - dragStartX.current;

    if (Math.abs(dx) > 5) hasDragged.current = true;

    const sensitivity = 0.008;
    setOffset(dragStartOffset.current - dx * sensitivity);

    const now = Date.now();
    const dt = now - lastTime.current;
    if (dt > 0) {
      velocityRef.current = -(clientX - lastX.current) * sensitivity / Math.max(dt / 16, 1);
    }
    lastX.current = clientX;
    lastTime.current = now;
  }, [isDragging]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const onUp = () => setIsDragging(false);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  const nudge = useCallback((dir) => {
    if (done) return;
    cancelAnimationFrame(animFrame.current);
    velocityRef.current = 0;
    setOffset((o) => o + dir);
  }, [done]);

  // Particles
  const createParticles = useCallback((el) => {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    for (let i = 0; i < 15; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const a = (Math.PI * 2 * i) / 15;
      const d = Math.random() * 80 + 30;
      p.style.left = cx + Math.cos(a) * d + 'px';
      p.style.top = cy + Math.sin(a) * d + 'px';
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1000);
    }
  }, []);

  // Click to select the center card
  const handleCardClick = useCallback((cardIndex, e) => {
    if (done) return;
    if (hasDragged.current) return;
    if (selected.includes(cardIndex)) return;

    const centeredIndex = wrapIndex(currentIndex);
    if (cardIndex !== centeredIndex) {
      const rawDiff = cardIndex - wrapIndex(Math.round(offset));
      let diff = rawDiff;
      if (diff > TOTAL_CARDS / 2) diff -= TOTAL_CARDS;
      if (diff < -TOTAL_CARDS / 2) diff += TOTAL_CARDS;
      cancelAnimationFrame(animFrame.current);
      velocityRef.current = 0;
      setOffset((o) => o + diff);
      return;
    }

    const next = [...selected, cardIndex];
    setSelected(next);
    createParticles(e.currentTarget);

    if (next.length >= spread.count) {
      setDone(true);
      setTimeout(() => onComplete(next), 1200);
    }
  }, [done, selected, spread.count, onComplete, createParticles, currentIndex, offset]);

  // Build visible cards
  const visibleCards = [];
  for (let i = -VISIBLE_HALF; i <= VISIBLE_HALF; i++) {
    const rawIdx = currentIndex + i;
    const cardIndex = wrapIndex(rawIdx);

    if (selected.includes(cardIndex)) continue;

    const fractional = rawIdx - offset;
    const absFrac = Math.abs(fractional);
    const isCenter = i === 0 && !isDragging && Math.abs(offset - currentIndex) < 0.15;

    const xPos = fractional * 145;
    const scaleFactor = 1 - absFrac * 0.12;
    const zOffset = -absFrac * 60;
    const cardOpacity = 1 - absFrac * 0.18;

    visibleCards.push(
      <div
        key={`${cardIndex}-${rawIdx}`}
        className={[
          'carousel-card',
          isCenter && 'carousel-card-front',
          done && 'carousel-card-disabled',
        ].filter(Boolean).join(' ')}
        style={{
          transform: `translateX(${xPos}px) translateZ(${zOffset}px) scale(${Math.max(0.5, scaleFactor)})`,
          opacity: Math.max(0.15, cardOpacity),
          zIndex: 50 - Math.round(absFrac * 10),
          willChange: 'transform, opacity',
        }}
        onClick={(e) => handleCardClick(cardIndex, e)}
      >
        <div className="carousel-card-inner">
          <span className="carousel-card-symbol">✦</span>
        </div>
      </div>
    );
  }

  return (
    <div className="page active">
      <div className="page-content draw-page-content">
        <button className="back-btn" onClick={onBack}>← 返回</button>
        <h2 className="draw-title">{spread.name}</h2>
        <p className="draw-subtitle">
          滑动浏览，点击正中的牌选中
          {selected.length > 0 && (
            <span className="draw-count"> ({selected.length}/{spread.count})</span>
          )}
        </p>

        {/* Selected cards area */}
        <div className="picked-cards-area">
          {spread.positions.map((pos, i) => (
            <div key={i} className={`picked-slot${i < selected.length ? ' picked-slot-filled' : ''}`}>
              {i < selected.length ? (
                <>
                  <span className="picked-slot-symbol">✦</span>
                  <span className="picked-slot-label">{pos}</span>
                </>
              ) : (
                <span className="picked-slot-placeholder">{pos}</span>
              )}
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className="carousel-wrapper">
          <button
            className="carousel-arrow"
            onClick={() => nudge(-1)}
            disabled={done}
          >‹</button>

          <div
            className="carousel-stage"
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
          >
            <div className="carousel-scene">
              {visibleCards}
            </div>
            <div className="carousel-glow" />
          </div>

          <button
            className="carousel-arrow"
            onClick={() => nudge(1)}
            disabled={done}
          >›</button>
        </div>

        <p className="draw-hint">
          {done
            ? '命运已定...'
            : `← 滑动浏览 ${TOTAL_CARDS} 张牌 · 点击正中的牌选中 →`}
        </p>
      </div>
    </div>
  );
}
