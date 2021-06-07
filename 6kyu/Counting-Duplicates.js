function duplicateCount(text) {
  let str = text.toLowerCase().split('');
  let dict = {};
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (dict[str[i]] === undefined) {
      dict[str[i]] = 1;
    }
    else dict[str[i]] += 1;
  }
  for (let n in dict) {
    if (dict[n] > 1) counter++;
  }
  return counter;
}