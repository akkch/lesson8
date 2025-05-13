sampleSecret = "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";

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error("Cannot divide by zero");
  } 
    return num1 / num2;
}

function divideV2(num1, num2) {
  if (num2 === 0) {
    throw new Error("Cannot divide by zero");
  } 
    return num1 / num2;
}

function add(num1, num2) {
  return num1 + num2;
}
module.exports = {
  multiply,
  divide,
  divideV2,
  add,
};