import { useState, useCallback } from 'react';
import Stars from './components/Stars';
import Landing from './components/Landing';
import Question from './components/Question';
import DrawCards from './components/DrawCards';
import Result from './components/Result';
import './App.css';

const PAGES = {
  LANDING: 'landing',
  QUESTION: 'question',
  DRAW: 'draw',
  RESULT: 'result',
};

export default function App() {
  const [page, setPage] = useState(PAGES.LANDING);
  const [spreadType, setSpreadType] = useState(null);
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [userQuestion, setUserQuestion] = useState('');

  const handleSelectSpread = useCallback((type) => {
    setSpreadType(type);
    setPage(PAGES.QUESTION);
  }, []);

  const handleStartDraw = useCallback((question) => {
    setUserQuestion(question || '');
    setPage(PAGES.DRAW);
  }, []);

  const handleDrawComplete = useCallback((indices) => {
    setSelectedIndices(indices);
    setPage(PAGES.RESULT);
  }, []);

  const handleRestart = useCallback(() => {
    setSpreadType(null);
    setSelectedIndices([]);
    setUserQuestion('');
    setPage(PAGES.LANDING);
  }, []);

  const handleBackToLanding = useCallback(() => {
    setPage(PAGES.LANDING);
  }, []);

  const handleBackToQuestion = useCallback(() => {
    setPage(PAGES.QUESTION);
  }, []);

  return (
    <>
      <Stars />
      <div className="app-container">
        {page === PAGES.LANDING && (
          <Landing onSelectSpread={handleSelectSpread} />
        )}
        {page === PAGES.QUESTION && (
          <Question onStart={handleStartDraw} onBack={handleBackToLanding} />
        )}
        {page === PAGES.DRAW && (
          <DrawCards
            spreadType={spreadType}
            onComplete={handleDrawComplete}
            onBack={handleBackToQuestion}
          />
        )}
        {page === PAGES.RESULT && (
          <Result
            spreadType={spreadType}
            selectedIndices={selectedIndices}
            userQuestion={userQuestion}
            onRestart={handleRestart}
          />
        )}
      </div>
    </>
  );
}
