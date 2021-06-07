function toCamelCase(str) {
  if (str.length === 0) return str;
  let msg = str.split(/[^A-Za-z0-9]/);
  let arr = [msg[0]];
  msg.slice(1).forEach(n => arr.push(n[0].toUpperCase() + n.slice(1).toLowerCase()));
  return arr.join('');
}