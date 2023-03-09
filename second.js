   const num1 = prompt("Введите первое число");
const num2 = prompt("Введите второе число");

if (!num1) {
  num1 = 0;
}

if (!num2) {
  num2 = 22;
}

const bothTrue = num1 && num2;
let resultVar;

if (bothTrue) {
  resultVar = 80;
} else {
  resultVar = 40;
}

const emptyObject = {};

if (num1 >= 90) {
  emptyObject.size = "big";
} else if (num1 <= 40) {
  emptyObject.size = "small";
} else {
  emptyObject.size = "medium";
}

let size;

switch (emptyObject.size) {
  case "big":
    size = 1000;
    break;
  case "medium":
    size = 100;
    break;
  case "small":
    size = 10;
    break;
  default:
    size = 0;
}

const result = num1 * num2 * size;

if (result % 2 !== 0) {
  console.log("Результат нечетный");
} else if (num2 > 50) {
  alert("Второе число больше 50");
}
console.log("The result of the division is odd!");
} else if (num2 > 50) {
alert("The second number you entered - ${numSecond}");
}
