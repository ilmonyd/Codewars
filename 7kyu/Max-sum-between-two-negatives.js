function maxSumBetweenTwoNegatives(a) {
  let result = -1;
  let sum = -1;
  for (let x of a)
  {
    if (sum === -1 && x < 0)
    {
      sum = 0;
    }
    else if (sum >= 0 && x < 0)
    {
      result = Math.max(result, sum);
      sum = 0;
    }
    else if (sum >= 0)
    {
      sum += x;
    }
  }
  return result;
}