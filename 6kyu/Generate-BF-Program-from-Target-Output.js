function generateBFProgram(target) {
  let str = target.split('');
  let result = [];
  for (let c of str) {
    result.push('+'.repeat(c.charCodeAt(0))+'.');
  }
  return result.join('>');
}