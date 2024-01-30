const calc = (expression) => {
  let [a, operator, b] = expression.split(' ');
  let result;
  a = +a;
  b = +b;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
  }
  return result;
};
console.log(calc('4 + 2'));

export const getEvenNumbers = (numbers) =>
  numbers.filter((elem) => elem % 2 == 0);

console.log(getEvenNumbers([1, 2, 3, 4]));
export default (a, b) => a + b;
