import { useEffect, useRef } from 'react';

export default function Stars() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const count = 150;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 2.5 + 0.5;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.setProperty('--duration', (Math.random() * 4 + 2) + 's');
      star.style.setProperty('--max-opacity', (Math.random() * 0.7 + 0.3));
      star.style.animationDelay = Math.random() * 5 + 's';
      fragment.appendChild(star);
    }

    container.appendChild(fragment);
    return () => { container.innerHTML = ''; };
  }, []);

  return <div className="stars" ref={containerRef} />;
}
