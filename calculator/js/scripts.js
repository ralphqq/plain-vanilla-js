const inputBtns = document.querySelectorAll('button');
let mainDisplayedResult = '0';
let subDisplayedResult = mainDisplayedResult;
updateDisplayedResult(mainDisplayedResult);
setButtons(inputBtns);

function setButtons(inputButtons) {
  // function for adding event listeners to calculator buttons
  inputButtons.forEach(btn => {
    if (btn.classList.contains('btn-digits')) {
      // Events for numeric buttons
      btn.addEventListener('click', e => {
        appendDigit(btn);
      });
    }
  });
}

function appendDigit(btnPressed) {
  let btnValue = btnPressed.getAttribute('value');
  let currentDisplayedResult = document.querySelector('#display-area').textContent;
  if (currentDisplayedResult === '0') { // When displayed value is exactly 0
    if (btnValue !== '0') {
      // only nonzero digits or . is processed
      if (btnValue === '.') {
        // append dot to leading 0
        currentDisplayedResult += btnValue
      } else {
        // otherwise, replace 0 with nonzero digit
        currentDisplayedResult = btnValue;
      }
    }
  } else {
    // append characters to current displayed value
    if (btnValue !== '.' || currentDisplayedResult('.') == -1) {
      // but do not append dot if it is already present in displayed value
      currentDisplayedResult += btnValue;
    }
  }
  updateDisplayedResult(currentDisplayedResult);
}

function updateDisplayedResult(resultToDisplay) {
  let displayArea = document.querySelector('#display-area');
  displayArea.textContent = resultToDisplay;
}