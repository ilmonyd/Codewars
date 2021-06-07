function shiritori(words) {
  let temp = [];
  if (words.length < 1) return temp;
  if (words[0] !== "") temp.push(words[0]);
  for (let i = 1; i < words.length; i++) {
    if (words[i] !== "") {
      if (words[i-1][words[i-1].length-1] === words[i][0]) temp.push(words[i]);
      else break;
    }
    else break;
  }
  return temp;
}