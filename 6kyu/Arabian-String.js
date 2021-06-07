function camelize(str) {
  let temp = [];
  for (let n of str.split(/[^A-Za-z0-9]/g)) {
    if (n !== "") temp.push(n[0].toUpperCase() + n.slice(1).toLowerCase());
  }
  return temp.join('')
}