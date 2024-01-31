import getMinSquaredNumber from './getMinSquaredNumber';
it('control if the array is"t empty', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});
it('control the input data is array data', () => {
  const result = getMinSquaredNumber('abc');
  expect(result).toEqual(null);
});
it('control returning squared number', () => {
  const result = getMinSquaredNumber([5, -3, 2]);
  expect(result).toBeCloseTo(4);
});
