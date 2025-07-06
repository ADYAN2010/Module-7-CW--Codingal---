function getHistory() {
  return document.getElementById("history-value").innerText;
}

function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}

function getOutput() {
  return document.getElementById("output-value").innerText;
}

function printOutput(num) {
  if (num === "") {
    document.getElementById("output-value").innerText = num;
  } else {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
  }
}

function getFormattedNumber(num) {
  if (num === "-") return "";
  let n = Number(num);
  return n.toLocaleString("en");
}

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ''));
}

// ✅ Operator button functionality
let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id === "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id === "backspace") {
      let output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        output = output.slice(0, -1);
        printOutput(output);
      }
    } else {
      let output = getOutput();
      let history = getHistory();
      if (output === "" && history !== "") {
        if (isNaN(history[history.length - 1])) {
          history = history.slice(0, -1);
        }
      }
      if (output !== "" || history !== "") {
        output = output === "" ? output : reverseNumberFormat(output);
        history += output;
        if (this.id === "=") {
          let result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history += this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}

// ✅ Number button functionality
let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    let output = reverseNumberFormat(getOutput());
    if (!isNaN(output)) {
      output += this.id;
      printOutput(output);
    }
  });
}
