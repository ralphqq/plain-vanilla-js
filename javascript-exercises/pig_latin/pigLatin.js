function translate(inputText) {
  const words = inputText.split(' ');
  let outputWords = [];
  const rule1 = /^[aeiou][a-z]+/i;
  const rule2 = /^([^aeiou]+)[a-z]+/;
  const rule3 = /^([^aeiou]?qu)[a-z]+/;

  words.forEach(currentWord => {
    let latinizedWord = currentWord;
    let rule1Result = currentWord.match(rule1);
    let rule2Result = currentWord.match(rule2);
    let rule3Result = currentWord.match(rule3);

    if (rule1Result !== null) {
      latinizedWord = currentWord + 'ay';
    } else if (rule2Result != null) {
      let conSound = (rule3Result !== null) ? rule3Result[1] : rule2Result[1];
      latinizedWord = currentWord.replace(conSound, '') + conSound + 'ay';
    }
    outputWords.push(latinizedWord);
  });

  return outputWords.join(' ');
}


module.exports = {
  translate
}

