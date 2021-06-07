function findShort(s) {
  let words = s.split(' ');
  let counter = words[0].length;
  for (let word of words) {
    if (word.length < counter) counter = word.length;
  }
  return counter;
}