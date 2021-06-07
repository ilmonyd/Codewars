function getCount(str) {
  var vowelsCount = 0;
  str.split('').forEach(function(char) {if (/([aeiouAEIOU])/g.test(char)) vowelsCount++});
  return vowelsCount;
}