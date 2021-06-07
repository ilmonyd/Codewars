function SeriesSum(n) {
  let temp = 0;
  for (let i = 0; i < n; i++) {
      temp += 1/(1 + 3*i);
  }
  return temp.toFixed(2);
}