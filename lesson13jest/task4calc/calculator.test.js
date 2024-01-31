import { calc } from './calculator.js';
it('control addition', () => {
  const result = calc('2 + 5');
  expect(result).toEqual('2 + 5 = 7');
});
it('control subtraction', () => {
  const result = calc('5 - 3');
  expect(result).toEqual('5 - 3 = 2');
});
it('control multiplication', () => {
  const result = calc('3 * 3');
  expect(result).toEqual('3 * 3 = 9');
});
it('control devision', () => {
  const result = calc('9 / 3');
  expect(result).toEqual('9 / 3 = 3');
});
it('if data isn"t string', () => {
  const result = calc(7);
  expect(result).toEqual(null);
});
