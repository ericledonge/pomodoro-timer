import './App.css';

import React, { useEffect, useState } from 'react';

import gear from './assets/images/gear.svg';
import Timer from './components/Time';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const [remainingTimeInSeconds, setRemainingTimeInSeconds] = useState(900);

  // handle timer running
  useEffect(() => {
    let interval: number;
    if (isRunning && remainingTimeInSeconds > 0) {
      interval = setInterval(() => {
        setRemainingTimeInSeconds((remainingTimeInSeconds) => remainingTimeInSeconds - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, remainingTimeInSeconds]);

  // handle timer ending
  useEffect(() => {
    if (isRunning && remainingTimeInSeconds === 0) {
      setIsRunning(false);
      setIsFinished(true);
      setTimeout(() => alert("Time's up!"), 1);
    }
  }, [isRunning, remainingTimeInSeconds]);

  const handleStartStopClick = () => {
    if (isFinished) {
      setIsFinished(false);
    }

    setIsEditMode(false);

    if (!isRunning) {
      setIsRunning(true);
    } else {
      setIsRunning(false);
    }
  };

  const handleSettingsClick = () => {
    setIsRunning(false);
    setIsEditMode(true);
  };

  return (
    <div className="wrapper">
      <div className={`ring ${isFinished ? 'ending' : ''}`}>
        <svg width="518" height="518" viewBox="0 0 518 518">
          <circle strokeWidth="9px" x="0" y="y" cx="259" cy="259" r="254" />
        </svg>
      </div>

      <div className="timer">
        <Timer
          remainingTimeInSeconds={remainingTimeInSeconds}
          isEditMode={isEditMode}
          setRemainingTimeInSeconds={setRemainingTimeInSeconds}
        />

        <button onClick={handleStartStopClick} className="start">
          {isRunning ? 'paused' : 'start'}
        </button>

        <button onClick={handleSettingsClick} className="settings">
          <img src={gear} alt="Settings" />
        </button>
      </div>
    </div>
  );
}

export default App;
