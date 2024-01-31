export default (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const absValues = arr.map((num) => num * num);
  return Math.min(...absValues);
};
// console.log(getMinSquaredNumber([]));
// console.log(getMinSquaredNumber(2));
// console.log(getMinSquaredNumber([2.5, 3, -5, 7, 10.5]));
