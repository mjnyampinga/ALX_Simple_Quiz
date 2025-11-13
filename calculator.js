// Arithmetic functions
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number2 === 0 ? "Cannot divide by zero" : number1 / number2;
}

// Helper to get input values as numbers (default 0)
function getInputValues() {
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0;
  return { number1, number2 };
}

// Update result on the page
function displayResult(value) {
  document.getElementById('calculation-result').textContent = value;
}

// Event listeners for buttons
document.getElementById('add').addEventListener('click', function () {
  const { number1, number2 } = getInputValues();
  const result = add(number1, number2);
  displayResult(result);
});

document.getElementById('subtract').addEventListener('click', function () {
  const { number1, number2 } = getInputValues();
  const result = subtract(number1, number2);
  displayResult(result);
});

document.getElementById('multiply').addEventListener('click', function () {
  const { number1, number2 } = getInputValues();
  const result = multiply(number1, number2);
  displayResult(result);
});

document.getElementById('divide').addEventListener('click', function () {
  const { number1, number2 } = getInputValues();
  const result = divide(number1, number2);
  displayResult(result);
});
