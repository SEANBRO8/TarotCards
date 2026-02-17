import { useState, useEffect, useRef, useCallback } from 'react';
import { TAROT_CARDS, SPREAD_TYPES } from '../data/tarotCards';
import { getCardImageUrl } from '../data/cardImages';

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const ENCOURAGE_MESSAGES = [
  "每一张牌都是宇宙的指引，困难只是暂时的风景",
  "挑战是化了妆的祝福，你比自己想象的更强大",
  "暴风雨过后必见彩虹，低谷之后便是上升",
  "这张牌提醒你：成长往往来自最艰难的经历",
  "宇宙给你考验，因为它相信你有通过的力量",
  "黑夜给了你黑色的眼睛，你却用它寻找光明",
];

function getEncourageMessage() {
  return ENCOURAGE_MESSAGES[Math.floor(Math.random() * ENCOURAGE_MESSAGES.length)];
}

function getCardNature(card, isReversed) {
  if (isReversed) {
    if (card.nature === 'positive') return 'neutral';
    if (card.nature === 'neutral') return 'challenging';
    return 'challenging';
  }
  return card.nature;
}

// Sparkle effect component for positive cards
function SparkleEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width = canvas.offsetWidth;
    const h = canvas.height = canvas.offsetHeight;

    const particles = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5 - 0.3,
        opacity: Math.random(),
        phase: Math.random() * Math.PI * 2,
      });
    }

    let frameId;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.phase += 0.05;
        p.opacity = 0.3 + Math.sin(p.phase) * 0.7;

        if (p.y < -10) p.y = h + 10;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${Math.max(0, p.opacity)})`;
        ctx.fill();

        // Draw a small cross/star shape
        ctx.strokeStyle = `rgba(255, 215, 0, ${Math.max(0, p.opacity * 0.5)})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(p.x - p.size * 2, p.y);
        ctx.lineTo(p.x + p.size * 2, p.y);
        ctx.moveTo(p.x, p.y - p.size * 2);
        ctx.lineTo(p.x, p.y + p.size * 2);
        ctx.stroke();
      });
      frameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return <canvas ref={canvasRef} className="card-effect-canvas sparkle-canvas" />;
}

// Warm glow effect for challenging cards
function WarmGlowEffect() {
  return <div className="card-effect-glow warm-glow" />;
}

function TarotCard({ card, isReversed, position, index }) {
  const [flipped, setFlipped] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const nature = getCardNature(card, isReversed);
  const imageUrl = getCardImageUrl(card.id);

  useEffect(() => {
    if (!imageUrl) { setFlipped(true); return; }
    const img = new Image();
    img.onload = () => setImgLoaded(true);
    img.onerror = () => setImgLoaded(true);
    img.src = imageUrl;
  }, [imageUrl]);

  useEffect(() => {
    const timer = setTimeout(() => setFlipped(true), 600 + index * 700);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={`tarot-card ${isReversed ? 'reversed-card' : ''} nature-${nature}`}>
      <div className="card-position-tag">{position}</div>
      <div className={`card-inner ${flipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <span className="card-front-symbol">✦</span>
        </div>
        <div className={`card-back card-back-${nature}`}>
          {imageUrl && (
            <img
              src={imageUrl}
              alt={card.name}
              className={`card-image ${isReversed ? 'card-image-reversed' : ''}`}
              loading="eager"
            />
          )}
          <div className="card-info-overlay">
            <div className="card-name-cn">{card.name}</div>
            <div className={`card-orientation ${isReversed ? 'reversed' : 'upright'}`}>
              {isReversed ? '逆位' : '正位'}
            </div>
          </div>
        </div>
      </div>
      {flipped && nature === 'positive' && <SparkleEffect />}
      {flipped && nature === 'challenging' && <WarmGlowEffect />}
    </div>
  );
}

function InterpretationCard({ card, isReversed, position, spreadType, delay }) {
  const reading = isReversed ? card.reversed : card.upright;
  const nature = getCardNature(card, isReversed);
  const isLove = spreadType === 'love';

  return (
    <div
      className={`interpretation-card interp-${nature}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="interp-header">
        <span className="interp-position">{position}</span>
        <span className="interp-card-name">{card.name} {card.nameEn}</span>
        <span className={`interp-nature-badge nature-badge-${nature}`}>
          {nature === 'positive' && '✦ 吉'}
          {nature === 'neutral' && '◈ 中'}
          {nature === 'challenging' && '◇ 警'}
        </span>
        <span className="interp-orientation">{isReversed ? '逆位 ↓' : '正位 ↑'}</span>
      </div>

      {nature === 'challenging' && (
        <div className="encourage-banner">
          <span className="encourage-icon">💪</span>
          <span className="encourage-text">{getEncourageMessage()}</span>
        </div>
      )}

      <div className="interp-body">
        <div className="interp-section">
          <div className="interp-section-title">✦ 牌面解读</div>
          <div className="interp-section-content">
            {isLove ? reading.love : reading.meaning}
          </div>
        </div>
        <div className="interp-section">
          <div className="interp-section-title">✦ {isLove ? '感情建议' : '事业指引'}</div>
          <div className="interp-section-content">
            {isLove ? reading.love : reading.career}
          </div>
        </div>
        <div className="interp-section">
          <div className="interp-section-title">✦ 灵性指引</div>
          <div className="interp-section-content">{reading.advice}</div>
        </div>
      </div>
    </div>
  );
}

function generateSummary(drawnCards, spreadType) {
  if (spreadType === 'single') {
    const { card, isReversed } = drawnCards[0];
    const reading = isReversed ? card.reversed : card.upright;
    return `你抽到了「${card.name}」${isReversed ? '逆位' : '正位'}。${reading.meaning}\n\n今日指引：${reading.advice}`;
  }

  if (spreadType === 'three') {
    const [past, present, future] = drawnCards;
    const pr = past.isReversed ? past.card.reversed : past.card.upright;
    const cr = present.isReversed ? present.card.reversed : present.card.upright;
    const fr = future.isReversed ? future.card.reversed : future.card.upright;
    return (
      `在过去，「${past.card.name}」${past.isReversed ? '逆位' : '正位'}的能量影响着你——${pr.meaning.substring(0, 40)}...\n\n` +
      `当前，「${present.card.name}」${present.isReversed ? '逆位' : '正位'}揭示了你的现状——${cr.meaning.substring(0, 40)}...\n\n` +
      `展望未来，「${future.card.name}」${future.isReversed ? '逆位' : '正位'}预示着——${fr.meaning.substring(0, 40)}...\n\n` +
      `宇宙的建议：${cr.advice}`
    );
  }

  if (spreadType === 'love') {
    const [you, them, rel] = drawnCards;
    const yr = you.isReversed ? you.card.reversed : you.card.upright;
    const tr = them.isReversed ? them.card.reversed : them.card.upright;
    const rr = rel.isReversed ? rel.card.reversed : rel.card.upright;
    return (
      `你的感情状态由「${you.card.name}」${you.isReversed ? '逆位' : '正位'}所代表——${yr.love}\n\n` +
      `对方的心意由「${them.card.name}」${them.isReversed ? '逆位' : '正位'}揭示——${tr.love}\n\n` +
      `你们的关系走向由「${rel.card.name}」${rel.isReversed ? '逆位' : '正位'}指引——${rr.love}\n\n` +
      `爱情箴言：${rr.advice}`
    );
  }

  return '';
}

export default function Result({ spreadType, selectedIndices, userQuestion, onRestart }) {
  const [drawnCards, setDrawnCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const spread = SPREAD_TYPES[spreadType];

  useEffect(() => {
    const timer = setTimeout(() => {
      const shuffled = shuffleArray(TAROT_CARDS);
      const cards = shuffled.slice(0, spread.count).map((card) => ({
        card,
        isReversed: Math.random() < 0.35,
      }));
      setDrawnCards(cards);
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [spread.count]);

  if (loading) {
    return (
      <div className="loading-overlay active">
        <div className="loading-content">
          <div className="tarot-spinner" />
          <p>命运之轮正在转动...</p>
        </div>
      </div>
    );
  }

  const keywords = drawnCards.flatMap((d) => {
    const kw = d.card.keywords;
    return d.isReversed ? kw.slice(0, 2) : kw.slice(2, 4);
  });

  const positiveCount = drawnCards.filter(
    (d) => getCardNature(d.card, d.isReversed) === 'positive'
  ).length;
  const challengingCount = drawnCards.filter(
    (d) => getCardNature(d.card, d.isReversed) === 'challenging'
  ).length;

  let overallNature = 'neutral';
  if (positiveCount > challengingCount) overallNature = 'positive';
  else if (challengingCount > positiveCount) overallNature = 'challenging';

  const summaryText = generateSummary(drawnCards, spreadType);

  return (
    <div className="page active">
      <div className="page-content result-page-content">
        <button className="back-btn" onClick={onRestart}>← 重新开始</button>
        <h2 className="result-title">{spread.name} — 占卜结果</h2>

        {userQuestion && (
          <div className="result-question">
            <span className="result-question-label">你的问题</span>
            <span className="result-question-text">「{userQuestion}」</span>
          </div>
        )}

        <div className={`result-overall-badge overall-${overallNature}`}>
          {overallNature === 'positive' && '✦ 整体运势良好 ✦'}
          {overallNature === 'neutral' && '◈ 运势平稳过渡 ◈'}
          {overallNature === 'challenging' && '◇ 需要特别关注 ◇'}
        </div>

        <div className="result-cards">
          {drawnCards.map((drawn, i) => (
            <TarotCard
              key={i}
              card={drawn.card}
              isReversed={drawn.isReversed}
              position={spread.positions[i]}
              index={i}
            />
          ))}
        </div>

        <div className="result-interpretation">
          {drawnCards.map((drawn, i) => (
            <InterpretationCard
              key={i}
              card={drawn.card}
              isReversed={drawn.isReversed}
              position={spread.positions[i]}
              spreadType={spreadType}
              delay={0.8 + i * 0.4}
            />
          ))}
        </div>

        <div className={`result-summary summary-${overallNature}`}>
          <div className="summary-title">✦ 综合解读 ✦</div>
          <div className="summary-text">
            {summaryText.split('\n\n').map((p, i) => (
              <span key={i}>{p}<br /><br /></span>
            ))}
          </div>
          {overallNature === 'challenging' && (
            <div className="summary-encourage">
              记住：塔罗牌不是命运的宣判，而是宇宙的提醒。每一张「警示牌」都是在帮助你避开暗礁、找到更好的航线。你有改变未来的力量。
            </div>
          )}
          <div className="summary-keywords">
            关键词：{keywords.join(' · ')}
          </div>
        </div>

        <button className="draw-btn restart-btn" onClick={onRestart}>
          <span className="btn-text">再次占卜</span>
          <span className="btn-glow"></span>
        </button>
      </div>
    </div>
  );
}
