import { getEvenNumbers } from './index.js';
it('should filter only even numbers', () => {
  const result = getEvenNumbers([1, 2, 3, 4]);
  expect(result).not.toEqual([1, 3]);
});
it('17 isn"t 18', () => {
  expect(17).not.toEqual(18);
});
it('isThere only odd numbers?', () => {
  const result = getEvenNumbers([1, 3]);
  expect(result).toEqual(Array(0));
});
import getSum, { getSquaredArray, getOddNumbers } from '../task2/calculator.js';
it('Is element of array NaN', () => {
  const result = getSquaredArray(['a', 'b']);
  expect(result).toEqual([NaN, NaN]);
});
it('There shoudn"t be even numbers', () => {
  const result = getOddNumbers([1, 2, 3, 4]);
  expect(result).not.toEqual([2, 4]);
});
it('should add & not multiply', () => {
  const result = getSum(2, 4);
  expect(result).not.toEqual(8);
});
import getMinSquaredNumber from '../task3abs/getMinSquaredNumber.js';
it('should process negative numbers', () => {
  const result = getMinSquaredNumber([-2, -4, -5]);
  expect(result).toEqual(4);
});
it('should process fractional numbers', () => {
  const result = getMinSquaredNumber([2.5, 3.5]);
  expect(result).toEqual(6.25);
});
it('shouldn"t process strings', () => {
  const result = getMinSquaredNumber([2.5, 'a']);
  expect(result).toEqual(NaN);
});
