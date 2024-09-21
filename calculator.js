function calculator(a, b, operator) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === ":") {
    return a / b;
  } else if (operator === "x") {
    return a * b;
  }
}

module.exports = calculator;
