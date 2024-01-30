import { getEvenNumbers } from './index.js';
it('17 is 17', () => {
  expect(17).toEqual(17);
});
it("18 is't equal 17", () => {
  expect(18).not.toEqual(17);
});

it('should filter only even numbers', () => {
  const result = getEvenNumbers([1, 2, 3, 4]); // вызываем функцию
  expect(result).toEqual([2, 4]); // ожидаемый результат
});
