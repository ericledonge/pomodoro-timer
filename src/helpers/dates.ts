const toTime = (minutesInput: number): string => {
  return minutesInput >= 10
    ? Math.trunc(minutesInput).toString()
    : ('0' + Math.trunc(minutesInput)).toString();
};

export default toTime;
