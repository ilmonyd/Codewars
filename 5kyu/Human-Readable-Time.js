function humanReadable(seconds) {
  let h = Math.floor(seconds / 3600).toString();
  let m = Math.floor((seconds - h*3600) / 60).toString();
  let s = (seconds % 60).toString();
  return ("00" + h).substr(h.length)+':'+ ("00" + m).substr(m.length)+':'+("00" + s).substr(s.length);
}