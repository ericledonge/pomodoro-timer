import React, { useEffect, useState } from 'react';

import toTime from '../helpers/dates';

type TimeProps = {
  remainingTimeInSeconds: number;
  isEditMode: boolean;
  handleUpdateRemainingTime: Function;
};

const Time = ({
  remainingTimeInSeconds,
  isEditMode = false,
  handleUpdateRemainingTime,
}: TimeProps) => {
  const minutes = remainingTimeInSeconds / 60;
  const seconds = remainingTimeInSeconds % 60;

  const [minutesDisplayed, setMinutesDisplayed] = useState(toTime(minutes));
  const [secondsDisplayed, setSecondsDisplayed] = useState(toTime(seconds));

  useEffect(() => {
    setMinutesDisplayed(toTime(remainingTimeInSeconds / 60));
    setSecondsDisplayed(toTime(remainingTimeInSeconds % 60));
  }, [remainingTimeInSeconds]);

  const handleMinutesChange = (minutesInput: any) => {
    if (minutesInput < 60) {
      setMinutesDisplayed(toTime(minutesInput));
      handleUpdateRemainingTime({
        minutes: Math.trunc(minutesInput),
        seconds: secondsDisplayed,
      });
    }
  };

  const handleSecondsChange = (secondsInput: any) => {
    if (secondsInput < 60) {
      setSecondsDisplayed(toTime(secondsInput));
      handleUpdateRemainingTime({
        minutes: minutesDisplayed,
        seconds: Math.trunc(secondsInput),
      });
    }
  };

  return (
    <div className="time">
      <div className="minutes">
        <input
          type="text"
          value={minutesDisplayed}
          onChange={(e) => handleMinutesChange(e.target.value)}
          disabled={!isEditMode}
        />
      </div>

      <div className="colon">:</div>

      <div className="seconds">
        <input
          type="text"
          value={secondsDisplayed}
          onChange={(e) => handleSecondsChange(e.target.value)}
          disabled={!isEditMode}
        />
      </div>
    </div>
  );
};

export default Time;
