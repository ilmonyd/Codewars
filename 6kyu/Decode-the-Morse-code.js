decodeMorse = function(morseCode) {
  let msg = morseCode.split('   ');
  let decoded = [];
  for (let n of msg) {
    let str = n.split(' ');
    for (let char of str) {
      decoded.push(MORSE_CODE[char]);
    }
    decoded.push(' ');
  }
  return decoded.join('').trim();
}