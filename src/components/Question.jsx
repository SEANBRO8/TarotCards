import { useState } from 'react';

export default function Question({ onStart, onBack }) {
  const [question, setQuestion] = useState('');

  return (
    <div className="page active">
      <div className="page-content">
        <button className="back-btn" onClick={onBack}>← 返回</button>
        <div className="question-container">
          <div className="crystal-ball">🔮</div>
          <h2>在心中默念你的问题</h2>
          <p className="hint-text">
            闭上眼睛，深呼吸，将你的问题注入意念之中...
          </p>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="你也可以在这里写下你的问题（可选）..."
            rows="3"
          />
          <button className="draw-btn" onClick={() => onStart(question)}>
            <span className="btn-text">开始抽牌</span>
            <span className="btn-glow"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
