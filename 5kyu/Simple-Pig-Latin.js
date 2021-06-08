function pigIt(str) {
  let msg = str.split(' ');
  let result = [];
  for (let word of msg) {
    if (word.match(/\w+/g)) result.push(word.substr(1) + word[0] + "ay");
    else result.push(word);
  }
  return(result.join(' '));
}