const caesar = function(textToEncrypt, shiftBy) {
  let encryptedText = '';
  for (let i = 0; i < textToEncrypt.length; i++) {
    let currentChar = textToEncrypt.charAt(i);
    if (isLetter(currentChar)) {
      currentChar = shiftChar(currentChar, shiftBy);
    }
    encryptedText += currentChar;
  }
  return encryptedText;
}

function isLetter(charToCheck) {
  const letterRegex = /[a-z]/i;
  const matches = charToCheck.match(letterRegex);
  return matches !== null;
}

function shiftChar(origChar, shiftValue) {
  const origCharCode = origChar.charCodeAt();
  let shiftedCharCode = origCharCode + shiftValue;
  if (origCharCode >= 65 && origCharCode <= 90) {
    if (shiftedCharCode < 65) {
      shiftedCharCode = 90 - ((90 - shiftedCharCode) % 26);
    } else if (shiftedCharCode > 90) {
      shiftedCharCode = 65 + ((shiftedCharCode - 65) % 26);
    }
  } else if (origCharCode >= 97 && origCharCode <= 122) {
    if (shiftedCharCode < 97) {
      shiftedCharCode = 122 - ((122 - shiftedCharCode) % 26);
    } else if (shiftedCharCode > 122) {
      shiftedCharCode = 97 + ((shiftedCharCode - 97) % 26);
    }
  }
  return String.fromCharCode(shiftedCharCode);
}


module.exports = caesar
