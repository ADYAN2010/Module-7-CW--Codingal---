// ✅ New elements
let historyValue = document.getElementById('history-value');
let outputValue = document.getElementById('output-value');

// ✅ Append numbers/operators
function append(value) {
  outputValue.textContent += value;
}

// ✅ Clear all
function clearDisplay() {
  historyValue.textContent = '';
  outputValue.textContent = '';
}

// ✅ Delete last character
function deleteLast() {
  outputValue.textContent = outputValue.textContent.slice(0, -1);
}

// ✅ Calculate and show history
function calculate() {
  try {
    const expression = outputValue.textContent;
    const result = eval(expression);
    historyValue.textContent = expression;
    outputValue.textContent = result;
  } catch (e) {
    outputValue.textContent = 'Error';
  }
}
