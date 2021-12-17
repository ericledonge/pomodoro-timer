import React, { useEffect, useState } from 'react';

import {
  extractMinutesFromRemainingTimeInSeconds,
  extractSecondsFromRemainingTimeInSeconds,
  toTime,
} from '../helpers/dates';

type TimerProps = {
  remainingTimeInSeconds: number;
  isEditMode: boolean;
  setRemainingTimeInSeconds: Function;
};

const Timer = ({
  remainingTimeInSeconds,
  isEditMode = false,
  setRemainingTimeInSeconds,
}: TimerProps) => {
  const [minutesDisplayed, setMinutesDisplayed] = useState(
    toTime(extractMinutesFromRemainingTimeInSeconds(remainingTimeInSeconds)),
  );
  const [secondsDisplayed, setSecondsDisplayed] = useState(
    toTime(extractSecondsFromRemainingTimeInSeconds(remainingTimeInSeconds)),
  );

  useEffect(() => {
    setMinutesDisplayed(
      toTime(extractMinutesFromRemainingTimeInSeconds(remainingTimeInSeconds)),
    );
    setSecondsDisplayed(
      toTime(extractSecondsFromRemainingTimeInSeconds(remainingTimeInSeconds)),
    );
  }, [remainingTimeInSeconds]);

  const handleMinutesChange = (minutesInput: number) => {
    if (minutesInput < 60) {
      setMinutesDisplayed(toTime(minutesInput));
      setRemainingTimeInSeconds(minutesInput * 60 + parseInt(secondsDisplayed));
    }
  };

  const handleSecondsChange = (secondsInput: number) => {
    if (secondsInput < 60) {
      setSecondsDisplayed(toTime(secondsInput));
      setRemainingTimeInSeconds(parseInt(minutesDisplayed) * 60 + secondsInput);
    }
  };

  return (
    <div className="time">
      <div className="minutes">
        <input
          type="text"
          value={minutesDisplayed}
          onChange={(e) => handleMinutesChange(parseInt(e.target.value))}
          disabled={!isEditMode}
        />
      </div>

      <div className="colon">:</div>

      <div className="seconds">
        <input
          type="text"
          value={secondsDisplayed}
          onChange={(e) => handleSecondsChange(parseInt(e.target.value))}
          disabled={!isEditMode}
        />
      </div>
    </div>
  );
};

export default Timer;
