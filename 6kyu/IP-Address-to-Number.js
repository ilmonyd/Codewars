function ipToNum(ip) {
  let str = ip.split('.');
  let temp = [];
  for (let n of str) {
    let s = "00000000"+eval(n).toString(2);
    temp.push(s.substr(s.length - 8));
  }
  return parseInt(temp.join(''), 2);
}

const numToIp = input => { return ("0".repeat(32) + input.toString(2)).substr(input.toString(2).length).match(/.{1,8}/g).map(n => parseInt(n,2)).join('.'); }