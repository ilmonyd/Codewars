function wordToBin(str) {
  let chars = str.split('');
  let temp = [];
  for (let char of chars) {
    let num = char.charCodeAt().toString(2);
    temp.push(('00000000'+ num).substr(num.length));
  }
  return temp;
}