function removeElement(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}
function generateKey(length, characters) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
function removeChars(str, chars) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (chars.indexOf(str[i]) === -1) {
      result += str[i];
    }
  }
  return result;
}
function sum(num) {
  let total = num;
  function add(nextNum) {
    total += nextNum;
    return add;
  }
  add.toString = function () {
    return total;
  };
  return add;
}

console.log(sum(3));
console.log(sum(5)(3));
console.log(sum(20)(5)(3));
