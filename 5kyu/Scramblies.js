function scramble(str1, str2) {
  let temp1 = str1.split(''), temp2 = str2.split('');
  let d1 = {}, d2 = {};
  let counter = 0;
  
  for (let i = 0; i < temp2.length; i++) {
    if (d2[temp2[i]] === undefined) {
      d2[temp2[i]] = 1;
    }
    else d2[temp2[i]] += 1;
  }
  
  for (let i = 0; i < temp1.length; i++) {
    if (d1[temp1[i]] === undefined) {
      d1[temp1[i]] = 1;
    }
    else d1[temp1[i]] += 1;
  }
  
  for (let letter in d2) {
    if (d1[letter] >= d2[letter]) {
      counter += d2[letter];
    }
  }
  return counter === temp2.length;
}