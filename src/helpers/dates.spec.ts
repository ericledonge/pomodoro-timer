import toTime from './dates';

describe('transformMinutes', () => {
  describe('when a number with two figures is provided', () => {
    it('should return the same number', () => {
      expect(toTime(10)).toEqual('10');
    });
  });

  describe('when a number with a single figure is provided', () => {
    it('should return a number with a 0 before the single figure', () => {
      expect(toTime(8)).toEqual('08');
    });
  });

  describe('when a decimal number is provided', () => {
    it('should return a integer number', () => {
      expect(toTime(10.5)).toEqual('10');
    });
  });
});
