function strToHash(str) {
  let dict = {};
  str = str.split(", ");
  if (str != "") {
    for (let segment of str) {
      let temp = segment.split("=");
      dict[temp[0]] = eval(temp[1]);
    }
  }  
  return dict;
}