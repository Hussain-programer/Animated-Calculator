let darkMode = false;
function calculate(operator) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 != 0) {
        result = num1 / num2;
        break;
      } else {
        result = "Error: Division by zero is not allowed";
        break;
      }
    default:
      result = "Error: Invalid operation";
  }
  document.getElementById("result").innerText = `Result: ${result}`; // Use backticks for template literals
}
function toggleDarkMode() {
  darkMode = !darkMode;
  document.body.classList.toggle("dark-mode", darkMode);
}
