export default function Landing({ onSelectSpread }) {
  const spreads = [
    { type: 'single', icon: '✦', name: '单牌占卜', desc: '抽取一张牌，获得今日指引' },
    { type: 'three', icon: '✦✦✦', name: '三牌阵', desc: '过去 · 现在 · 未来' },
    { type: 'love', icon: '♥', name: '爱情占卜', desc: '你的感情 · 对方心意 · 关系走向' },
  ];

  return (
    <div className="page active">
      <div className="landing-content">
        <div className="moon-symbol">☽</div>
        <h1 className="main-title">
          <span className="title-en">Mystic Tarot</span>
          <span className="title-cn">神秘塔罗</span>
        </h1>
        <p className="subtitle">探索命运的奥秘，聆听宇宙的低语</p>

        <div className="spread-selection">
          {spreads.map((s) => (
            <button
              key={s.type}
              className="spread-btn"
              onClick={() => onSelectSpread(s.type)}
            >
              <div className="spread-icon">{s.icon}</div>
              <div className="spread-name">{s.name}</div>
              <div className="spread-desc">{s.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
