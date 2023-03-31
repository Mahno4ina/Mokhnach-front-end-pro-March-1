function removeElement(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 3);
console.log(array);

function generateKey(length, characters) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const key = generateKey(10, characters);
console.log(key);

function removeChars(str, charsToRemove) {
  const regex = new RegExp(`[${charsToRemove.join("")}]`, "g");
  return str.replace(regex, "");
}

const str = " hello world";
const charsToRemove = ["l", "d"];
const newStr = removeChars(str, charsToRemove);
console.log(newStr);

function createSum() {
  let sum = 0;
  return function (num) {
    sum += num;
    return sum;
  };
}

const sum = createSum();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
