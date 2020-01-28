const snakeCase = function(inputText) {
  const simpleCase = /[a-z]+(([^a-z]+)[a-z]+)+/i;
  const camelCase = /[a-z]+([A-Z])+[a-z]+/;
  let finalText = '';
  const simpleCaseResult = inputText.match(simpleCase);
  const camelCaseResult = inputText.match(camelCase);

  if (simpleCaseResult !== null) {
    const puncRegexp = /[^a-z]+/gi;
    const wholeMatch = simpleCaseResult[0];
    finalText = wholeMatch.replace(puncRegexp, '_');
  } else if (camelCaseResult !== null) {
    const wholeMatch = camelCaseResult[0];
    const charMatch = camelCaseResult[1];
    const charIndex = wholeMatch.indexOf(charMatch);
    finalText = wholeMatch.slice(0, charIndex) + 
        '_' + wholeMatch.slice(charIndex, wholeMatch.length);
  }
  return finalText.toLowerCase();
}

module.exports = snakeCase
