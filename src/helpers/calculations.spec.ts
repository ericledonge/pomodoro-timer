import sum from './calculations';

describe('add', () => {
  it('should do calculations', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
