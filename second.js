const num1 = prompt("Enter first number:");
const num2 = prompt("Enter second number:");

if (!num1) {
  num1 = 0;
}

if (!num2) {
  num2 = 22;
}

let result;
if (num1 && num2) {
  result = 80;
} else {
  result = 40;
}

const obj = {};

if (num1 >= 90) {
  obj.size = "big";
} else if (num1 <= 40) {
  obj.size = "small";
} else {
  obj.size = "medium";
}

let size;

switch (empty.size) {
  case "big":
    size = 1000;
    break;
  case "medium":
    size = 100;
    break;
  case "small":
    size = 10;
    break;
}

const resultAll = num1 * num2 * num3;
if (resultAll % 2 !== 0) {
  console.log("The result is odd");
} else {
  if (num2 > 50) {
    alert(num2);
  }
}
