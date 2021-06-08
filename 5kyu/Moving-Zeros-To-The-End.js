var moveZeros = function (arr) {
  let temp = [], counter = 0;
  for (let n of arr) {
    if (n !== 0) {
      temp.push(n);
    }
    else counter++;
  }
  for (let i = 0; i < counter; i++) {
    temp.push(0);
  }
  return temp;
}