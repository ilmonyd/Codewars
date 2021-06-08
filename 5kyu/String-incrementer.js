function incrementString (str) {
  let letters = ''
  let nums = 0, len;
  if (/[A-Za-z]/g.test(str)) letters = str.match(/[A-Za-z]/g).join('');
  if (/[0-9]/g.test(str)) {
    nums = str.match(/[0-9]/g).join('');
    len = nums.length;
  }
  if ((parseInt(nums, 10)+1).toString().length>len) {
    nums = ('0'.repeat(len) + (parseInt(nums, 10)+1)).substr(-(parseInt(nums, 10)+1).toString().length)
  }
  else nums = ('0'.repeat(len) + (parseInt(nums, 10)+1)).substr(-len)
  
  return letters + nums;
}