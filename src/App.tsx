import './App.css';

import React, { useEffect, useState } from 'react';

import gear from './assets/images/gear.svg';
import Time from './components/Time';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [remainingTimeInSeconds, setRemainingTimeInSeconds] = useState(900);

  useEffect(() => {
    let interval: number;
    if (isRunning && remainingTimeInSeconds > 0) {
      interval = setInterval(() => {
        setRemainingTimeInSeconds((remainingTimeInSeconds) => remainingTimeInSeconds - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, remainingTimeInSeconds]);

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

  const handleUpdateRemainingTime = ({ minutes, seconds }: any) => {
    setRemainingTimeInSeconds(minutes * 60 + seconds);
  };

  return (
    <div className="wrapper">
      <div className={`ring ${isFinished ? 'ending' : ''}`}>
        <svg width="518" height="518" viewBox="0 0 518 518">
          <circle strokeWidth="9px" x="0" y="y" cx="259" cy="259" r="254" />
        </svg>
      </div>

      <div className="timer">
        <Time
          remainingTimeInSeconds={remainingTimeInSeconds}
          isEditMode={isEditMode}
          handleUpdateRemainingTime={handleUpdateRemainingTime}
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
