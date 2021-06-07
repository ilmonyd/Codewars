const inArray = (array1,array2) => {
  let arr = [];
  array1.forEach(x => { array2.forEach(y => { (y.includes(x) && !arr.includes(x)) ? arr.push(x) : '' })});
  return arr.sort();
}