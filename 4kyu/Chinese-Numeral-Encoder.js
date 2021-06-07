function toChineseNumeral(num) {
  var numerals = {
    "-":"负",
    ".":"点",
    0:"零",
    1:"一",
    2:"二",
    3:"三",
    4:"四",
    5:"五",
    6:"六",
    7:"七",
    8:"八",
    9:"九",
    10:"十",
    100:"百",
    1000:"千",
    10000:"万"
  };
  let parts = num.toString().split('.');
  console.log(parts)
  let result = [];
  let n = parts[0].split('');
  let part_result = [];
  if (parts[0] === "-0") part_result = [numerals['-'], numerals[0]]
  else if (0 <= Math.abs(parseInt(parts[0], 10)) && Math.abs(parseInt(parts[0], 10)) <= 10) part_result = [[(parseInt(parts[0], 10) < 0) ? numerals['-'] : ''], numerals[Math.abs(parseInt(parts[0], 10))]]
  else if (10 < Math.abs(parseInt(parts[0], 10)) && Math.abs(parseInt(parts[0], 10)) < 20) {
    part_result = [[(parseInt(parts[0], 10) < 0 ) ? numerals['-'] : ''] , [numerals[10]] + [(n[parts[0].length-1] === '0') ? '' : numerals[n[parts[0].length-1]]]]
  }
  else {
    let part_len = n.length-1;
    for (let i = 0; i < n.length; i++) {
      part_result.push([numerals[n[i]], (i !== part_len && n[i] !== '-' && n[i] !== '0') ? [numerals[Math.pow(10, part_len-i)]] : ['']].join(''))
    }
  }
  result.push(part_result.join('').replace(/零+/g, numerals[0]))
  if (parts.length > 1) {
    part_result = [];
    n = parts[1].toString().split('');
    for (let i = 0; i < n.length; i++) {
      part_result.push(numerals[n[i]])
    }
    result.push(part_result.join('')) 
  }
  return result.join((result.length > 1) ? numerals['.'] : '').replace(/零+$/g, '');
}