const rules = { 'dot': 1, 'dash': 3, 'sGap': 1, 'mGap': 3, 'lGap': 7 };

var decodeBits = function(bits) {
    bits = bits.replace(/(^[0]+)|([0]+)$/g, '');
    var times;
    const timeUnitMax = String( Math.max(...bits.match(/[1]+/g)) ).length,
        timeUnitMin = String( Math.min(...bits.match(/[1]+/g)) ).length,
        zeroes = bits.match(/[0]+/);

  const rate = (len) => t => len * rules[t];

  if (timeUnitMin === timeUnitMax) {

    if(zeroes) {
      var len = zeroes[0].length;
      times = ( len === 1 || len === 3 || len === 7 ) ? rate(1) : rate(len);
    } else {
      times = rate( timeUnitMin );
    }

  } else {
    times = rate( timeUnitMin );
  }

    function printBinary(b, t) {
      return Array.from({length: times(t)}, () => b).join('');
    }
    
    function binaryRegex(binary, type) {
      return new RegExp(printBinary(binary, type), 'g');
    }

    var binaryToMorse = word => {
    return word.replace(binaryRegex(1, 'dash'), '-').replace(binaryRegex(1, 'dot'), '.').replace(binaryRegex(0, 'mGap'), ' ').replace(binaryRegex(0, 'sGap'), '');
    };

    var words = bits.split(printBinary(0, 'lGap'));
    return words.map( binaryToMorse ).join("   ");
}

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