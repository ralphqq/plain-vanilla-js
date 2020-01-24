const fibonacci = function(nthFib) {
  if (nthFib < 0) {
    return 'OOPS';
  }
  if (nthFib < 3) {
    return 1;
  }
  let firstNum = 1;
  let secondNum = 1;
  let currentNum = firstNum + secondNum;
  let currentPlace = 3;
  while (currentPlace < nthFib) {
    firstNum = secondNum;
    secondNum = currentNum;
    currentNum = firstNum + secondNum;
    currentPlace++;
  }
  return currentNum;
}

module.exports = fibonacci
