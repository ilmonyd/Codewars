function rgb(r, g, b) {
  let temp = [r, g, b], result = [];
  temp.forEach( n => {
    if (n >= 255) result.push("FF");
    else if (n <= 0) result.push("00")
    else result.push(("0" + n.toString(16)).substr(n.toString(16).length-1));
    });
  return result.join('').toUpperCase();
}