function getMinSquaredNumber(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const absArray = arr.map((elem) => Math.abs(elem));
  const minNumber = Math.min(...absArray);
  const number = Math.trunc(minNumber);
  return Math.pow(number, 2);
}
console.log(getMinSquaredNumber([]));
console.log(getMinSquaredNumber(2));
console.log(getMinSquaredNumber([2.5, 3, -5, 7, 10.5]));
