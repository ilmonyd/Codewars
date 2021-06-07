let neighbors = {
    "0": ["8"],
    "1": ["2", "4"],
    "2": ["1", "3", "5"],
    "3": ["2", "6"],
    "4": ["1", "5", "7"],
    "5": ["2", "4", "6", "8"],
    "6": ["3", "5", "9"],
    "7": ["4", "8"],
    "8": ["5", "7", "9", "0"],
    "9": ["6", "8"]
  };


function getPINs(observed) {
  let result = [];
  let num = observed.split('');
  
  function getCombinations(num, idx, curCombo) {
    let curDigit = num[idx];
    let candidates = new Set(neighbors[curDigit]);
    candidates.add(curDigit);
    candidates.forEach(idx === num.length - 1 ? reachedEnd : goDeeper);
    function reachedEnd(candidate) { 
      result.push(curCombo + candidate); 
      }
    function goDeeper(candidate) {
      getCombinations(num, idx + 1, curCombo + candidate)
    }
  }
  getCombinations(num, 0, '');
  return result;
}