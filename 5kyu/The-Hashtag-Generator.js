function generateHashtag (str) {
  let words = [];
  str.split(" ").filter(n => n!=="").forEach(n => words.push(n.charAt(0).toUpperCase() + n.slice(1)));
  if (words.join('').length < 140 && str.split(" ").filter(n => n!=="").length > 0) { return '#' + words.join('') };
  return false;
}