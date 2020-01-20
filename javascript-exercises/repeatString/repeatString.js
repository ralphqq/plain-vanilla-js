const repeatString = function(textToRepeat, nTimes) {
  if (nTimes < 0) {
    return 'ERROR';
  }

  let finalText = '';
  let counter = 0;
  while (counter < nTimes) {
    finalText += textToRepeat;
    counter++;
  }
  return finalText;
}

module.exports = repeatString
