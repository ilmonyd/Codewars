function validParentheses(parens) {
  if (parens[0] === ')' || parens[parens.length-1] === '(' || ((parens.match(/[(]/g) || []).length !== (parens.match(/[)]/g) || []).length)) return false;
  if ((parens.substr(0, parens.length/2).match(/[)]/g) || []).length > (parens.substr(0, parens.length/2).match(/[(]/g) || []).length) return false;
  return true;
}