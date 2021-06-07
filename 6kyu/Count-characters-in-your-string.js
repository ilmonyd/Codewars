function count (string) {  
  let dict = {};
  let str = string.split('');
  for (let c of str) {
    if (dict[c] === undefined ) dict[c] = 1;
    else dict[c] += 1;
  }
  return dict;
}