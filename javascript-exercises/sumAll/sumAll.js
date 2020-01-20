const sumAll = function(startNum, endNum) {
  // error cases
  let negativeNumber = startNum < 0 || endNum < 0;
  let notNumber = typeof(startNum) != 'number' || typeof(endNum) != 'number';
  if (negativeNumber || notNumber) {
    return 'ERROR';
  }

  let sumTotal = 0;

  if (startNum > endNum) {
    // swap values
    let tempNum = startNum;
    startNum = endNum;
    endNum = tempNum;
  }

  for (let i = startNum; i <= endNum; i++) {
    sumTotal += i;
  }
  return sumTotal;
}

module.exports = sumAll
