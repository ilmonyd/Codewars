function solve(arr) {
  let s = new Set();
  for (let val of arr.reverse()) {
    s.add(val);
  }
  return Array.from(s).reverse();
}