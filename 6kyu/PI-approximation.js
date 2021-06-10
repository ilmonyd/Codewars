function iterPi(epsilon) {
  let arr = [], result = 0, i = 0;
  while (Math.abs(Math.PI - result*4) > epsilon) {
    result += (i % 2 === 0) ? 1/(2*i+1) : -1/(2*i+1);
    i++;
  }
  return [i, parseFloat((result*4).toPrecision(11))];
}