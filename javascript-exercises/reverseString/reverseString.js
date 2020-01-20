const reverseString = function(someText) {
  let backwardText = '';
  for (let i = someText.length - 1; i >= 0; i--) {
    backwardText += someText[i];
  }
  return backwardText;
}

module.exports = reverseString
