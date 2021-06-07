function nextBigger(n){
  let seq = n.toString().split('');
  
  let p = -1;
  for (let i = seq.length-1; i > 0; i--) {
    if (+seq[i] > +seq[i-1]) {
      p = i-1;
      break;
    }
  }
  
  if (p === -1) return  p;
  
  let r = seq.splice(p);
  
  let pv = r.splice(0, 1)[0];
  let mm = null, mmi = null;
  for (let i = 0; i < r.length; i++) {
    if (r[i] > pv) {
      if (mm == null || r[i] < mm) {
        mm = r[i];
        mmi = i;
      }
    }
  }

  if (mmi == null) return -1;

  r.splice(mmi, 1);
  r.push(pv);
  r = r.sort();
  let ret = +seq.concat([mm]).concat(r).join('');
  if (ret < n) return -1;
  console.log(p);
  return ret;
}