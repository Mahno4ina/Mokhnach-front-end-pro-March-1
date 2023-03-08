/**1) Запросить у пользователя 2 числа, это должны быть разные переменные */
const num1 = prompt("Enter the first number");
const num2 = prompt("Enter the second number");

/**1) Если пользователь не ввел первое число оно будет равнятся 0 */
if (!numFirst) {
  numFirst = 0;
}

/*Если пользователь не ввел второе число оно будет равнятся 22*/
if (!numSecond) {
  numSecond = 22;
}

/*2) Создать еще одну переменную*/
const thirdVariable;

/*Если обе предыдущие переменные имеют значение по Булеву true, тогда эта переменная
Будет равняться 80 иначе, если хоть одна из двух предыдущих равняется false то эта переменная будет равна 40*/
if (numFirst && numSecond) {
    thirdVariable = 80;
} else {
    thirdVariable = 40;
}

/*3)Создаем пустой обьект*/
const emptyObject = {};

/*4)Проверяем если Первая переменная больше или равно 90 то добавляем в обьект поле size = 'big'
Проверяем если Первая переменная меньше или равно 40 то добавляем в обьект поле size = 'small'
Иначе добавляем в обьект поле size = 'medium'*/
if (numFirst >= 90) {
    emptyObject.size = "big";
} else if (numFirst <= 40) {
    emptyObject.size = "small";
} else {
    emptyObject.size = "medium";
}

/*5)Дальше создаем еще одну переменную*/
const size;

/*6)С помощью конструкции switch case пишем такую логику
Если поле size в обьекте 'big' присваиваем этой переменной 1000
Если поле size в обьекте 'medium' присваиваем этой переменной 100
Если поле size в обьекте 'small' присваиваем этой переменной 10*/
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
    break;
}

/*В конце программы перемножаем все числа, записываем результат в переменную и проверяем если остаток от деление на 2 не равен нулю,
Выводим в консоль какое то сообщение, придумайте сами xD
Иначе проверяем что второе число которое ввел пользователь больше 50 и тогда показываем alert() - это число*/
const result = numFirst * numSecond * switchResualt;
if (result % 2 !== 0) {
console.log("The result of the division is odd!");
} else if (num2 > 50) {
alert("The second number you entered - ${numSecond}");
}