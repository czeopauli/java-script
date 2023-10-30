//Greet function

function welcomeMsg(name) {
  return "Welcome " + name + "!";
}

console.log(welcomeMsg("Jane"));

function welcomeMsg(name) {
  return "Welcome " + name + "!";
}

console.log(welcomeMsg("Marc"));

//Gross Price Function

function calcGrossPrice(netPrice, taxRate) {
  return netPrice + netPrice * taxRate;
}
console.log(calcGrossPrice(20, 0.19));

function calGrossPrice(netPrice, taxRate) {
  return netPrice + netPrice * taxRate;
}

console.log(calGrossPrice(40, 0.16));

//Add Positive Fuction

function addPositive(number1, number2) {
  return number1 + number2;
}
console.log(addPositive(2, 3));

function addPositive(num1, num2) {
  return Math.abs(num1) + Math.abs(num2);
}
console.log(addPositive(3, -5));

function addPositive(num1, num2) {
  return Math.abs(num1) + Math.abs(num2);
}
console.log(addPositive(-1, -8));
