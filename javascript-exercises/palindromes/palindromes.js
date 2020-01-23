const palindromes = function(textToCheck) {
  const lettersOnlyRegex = /[a-z]/ig;
  let allLettersInText = textToCheck.match(lettersOnlyRegex);
  if (allLettersInText !== null) {
    let textOrig = allLettersInText.join('');
    let textReversed = allLettersInText.reverse().join('');
    return textOrig.toLowerCase() === textReversed.toLowerCase();
  }
}

module.exports = palindromes
