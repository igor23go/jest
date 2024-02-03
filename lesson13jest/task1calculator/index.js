export const getEvenNumbers = (numbers) =>
  numbers.filter((elem) => elem % 2 == 0);

console.log(getEvenNumbers([1, 2, 3, 4]));
console.log(getEvenNumbers([1, 3]));
