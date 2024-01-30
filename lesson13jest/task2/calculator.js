export const getSquaredArray = (numbers) =>
  numbers.map((number) => number * number);
export const getOddNumbers = (numbers) =>
  numbers.filter((number) => number % 2 !== 0);
export default (a, b) => a + b;
const numbers = [1, 2, 3, 4];
console.log(getSquaredArray(numbers));
console.log(getOddNumbers(numbers));
