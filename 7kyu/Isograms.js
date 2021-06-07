function isIsogram(str) {
  let myStr = str.toLowerCase();
  let mySet = new Set();
  for(let i = 0; i < myStr.length; i++){
    if(mySet.has(myStr[i])){
      return false;
      break;
    }
    else{
      mySet.add(myStr[i]);
    }
  }
  return true;
}