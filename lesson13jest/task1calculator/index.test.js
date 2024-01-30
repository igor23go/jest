import getSum, { getEvenNumbers } from './index.js';
it('17 is 17', () => {
  expect(17).toEqual(17);
});

it('should filter only even numbers', () => {
  const result = getEvenNumbers([1, 2, 3, 4]); // вызываем функцию
  expect(result).toEqual([2, 4]); // ожидаемый результат
});

it('should get sum of numbers', () => {
  const result = getSum(3, 4);
  expect(result).toEqual(7);
});
