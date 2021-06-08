function ipToInt32(ip) {
  let str = ip.split('.');
  let temp = [];
  for (let n of str) {
    let s = "00000000"+eval(n).toString(2);
    temp.push(s.substr(s.length - 8));
  }
  return parseInt(temp.join(''), 2);
}

function ipsBetween(start, end) {
  return ipToInt32(end) - ipToInt32(start);
}