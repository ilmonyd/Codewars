function add(ia, ib) {
  let a = ia.split('').reverse();
  let b = ib.split('').reverse();
  let result = [];
  let next = 0;
  let counter;
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    let temp = parseInt(a[i]) + parseInt(b[i]) + next;
    if (temp < 10) {
      result.push(temp);
      next = 0;
    }
    else {
      result.push(temp % 10);
      next = 1;
    }
    counter = i;
  }
  for (let i = counter+1; i < Math.max(a.length, b.length); i++) {
    if (a.length > b.length) {
      let temp = parseInt(a[i]) + next;
      if (temp < 10) {
        result.push(temp);
        next = 0;
      }
      else {
        result.push(temp % 10);
        next = 1;
      }
    }
    else {
      let temp = parseInt(b[i]) + next;
      if (temp < 10) {
        result.push(temp);
        next = 0;
      }
      else {
        result.push(temp % 10);
        next = 1;
      }
    }
  }
  if (next === 1) result.push(next);
  return result.reverse().join('');
}