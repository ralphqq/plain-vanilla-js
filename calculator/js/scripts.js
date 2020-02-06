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
    } else if (btn.classList.contains('btn-edit')) {
      btn.addEventListener('click', e => {
        editDisplayedResult(btn);
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

function editDisplayedResult(btn) {
  let btnId = btn.getAttribute('id');
  let currentDisplayedResult = document.querySelector('#display-area').textContent;
  let nDigits = currentDisplayedResult.length;
  if (btnId === 'btn-back') {   // backspace
    if (nDigits == 1) {
      // replace sole remaining digit with a 0
      currentDisplayedResult = 0;
    } else {
      // remove rightmost digit
      currentDisplayedResult = currentDisplayedResult.slice(0, nDigits - 1);
    }
  } else if (btnId === 'btn-clear') {   // clear all
    // set displayed result and actual results to 0
    currentDisplayedResult = 0;
    mainDisplayedResult = 0;
    subDisplayedResult = 0;
  }
  updateDisplayedResult(currentDisplayedResult);
}
