function zeros (n) {
  let counter = 0;
  for (let i = 5; Math.floor(n / i); i *= 5) counter += Math.floor(n / i);
  return counter;
}