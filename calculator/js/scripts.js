const MAX_DIGITS = 15;
const inputBtns = document.querySelectorAll('button');
let mainDisplayedResult = '0';
let subDisplayedResult = mainDisplayedResult;
let currentOperation = {
  operand1: null,
  operand2: null,
  operator: null,
  result: null,
  evaluate: function() {
    switch(this.operator) {
      case 'plus':
        this.result = this.operand1 + this.operand2;
        break;
      case'minus':
        this.result = this.operand1 - this.operand2;
        break;
      case 'multiply':
        this.result = this.operand1 * this.operand2;
        break;
      case 'divide':
        if (this.operand2 != 0) {
          this.result = this.operand1 / this.operand2;
        }
        break;
    }
  },
};

updateDisplayedResult(mainDisplayedResult);
setButtons(inputBtns);

function setButtons(inputButtons) {
  // function for adding event listeners to calculator buttons
  inputButtons.forEach(btn => {
    if (btn.classList.contains('btn-digits')) {
      // Events for numeric buttons
      btn.addEventListener('click', e => {
        let btnPressed = btn.getAttribute('value');
        appendDigit(btnPressed);
      });
    } else if (btn.classList.contains('btn-edit')) {
      btn.addEventListener('click', e => {
        let btnId = btn.getAttribute('id');
        editDisplayedResult(btnId);
      });
    } else if (btn.classList.contains('btn-ops')) {
      btn.addEventListener('click', e => {
        let btnId = btn.getAttribute('id');
        let newDisplay = '';
        if (btnId !== 'btn-equals') {
          // Every time user presses operator except =
          // update currentOperation object:
          let operand1 = getDisplayValue(toNumber=true);
          currentOperation['operand1'] = operand1;
          currentOperation['operator'] = btnId.split('-')[1];
          newDisplay = 0;
        } else {
          // User presses = button
          let operand2 = getDisplayValue(toNumber=true);
          currentOperation['operand2'] = operand2;
          currentOperation.evaluate();
          newDisplay = currentOperation['result'];
        }
        updateDisplayedResult(newDisplay);
      });
    }
  });
}

function appendDigit(btnValue) {
  let currentDisplayedResult = getDisplayValue();
  if (currentDisplayedResult.replace('.', '').length >= MAX_DIGITS) {
    // MAX_DIGITS has been reached, do not append additional digits
    return;
  }

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
    if (btnValue !== '.' || currentDisplayedResult.indexOf('.') == -1) {
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

function editDisplayedResult(btnId) {
  let currentDisplayedResult = getDisplayValue();
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

function evaluateOperation(currentOps) {
  
}

function getDisplayValue(toNumber = false) {
  let displayValue = document.querySelector('#display-area').textContent;
  return toNumber ? parseFloat(displayValue): displayValue;
}
