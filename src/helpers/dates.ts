export const toTime = (minutesInput: number): string => {
  return minutesInput >= 10
    ? Math.trunc(minutesInput).toString()
    : ('0' + Math.trunc(minutesInput)).toString();
};

export const extractMinutesFromRemainingTimeInSeconds = (
  remainingTimeInSeconds: number,
) => Math.trunc(remainingTimeInSeconds / 60);

export const extractSecondsFromRemainingTimeInSeconds = (
  remainingTimeInSeconds: number,
) => Math.trunc(remainingTimeInSeconds % 60);
