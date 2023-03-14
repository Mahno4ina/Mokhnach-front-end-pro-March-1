/*Вивести в консоль в один рядок через кому числа від 10 до 20.*/
for (let i = 10; i <= 20; i++) {
  if (i < 20) {
    console.log(i + ",");
  } else {
    console.log(i);
  }
}
/*Вивести в консоль в один рядок через кому квадрати чисел від 10 до 20.*/
for (let i = 10; i <= 20; i++) {
  let square = i * i;
  if (i < 20) {
    console.log(square + ",");
  } else {
    console.log(square);
  }
}
/*Знайти добуток усіх цілих чисел від 15 до 35.*/
let wholeNumbers = 1;
for (let i = 15; i <= 35; i++) {
  wholeNumbers *= i;
}
console.log(wholeNumbers);
/*Знайти середнє арифметичне всіх цілих чисел від 1 до 500.*/
let sum = 0;
let count = 0;
for (let i = 1; i <= 500; i++) {
  sum += i;
  count++;
}
const average = sum / count;
console.log(average);
/*Вивести суму лише парних чисел в діапазоні від 30 до 80.*/
let sum2 = 0;

for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sum2 += i;
  }
}
console.log(sum2);
/*Вивести всі числа в діапазоні від 100 до 200 кратні 3.*/
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
/*Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).*/
const number = prompt("Write a number:");
let agent007 = true;
if (number === "1") {
  agent007 = false;
} else if (number !== "2") {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      agent007 = false;
      break;
    }
  }
}
if (agent007) {
  console.log("simple");
} else {
  console.log("not simple");
}