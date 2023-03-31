//--------------------------------------------------------------1
const uniqueValues = (arr) => {
  return [...new Set(arr)];
};
//------------------------------------------------------------------2
const mostFrequentNumber = (arr) => {
  let count = {};
  let mostFrequent = arr[0];
  arr.forEach((num) => {
    if (!count[num]) count[num] = 0;
    count[num]++;
    if (count[num] > count[mostFrequent]) mostFrequent = num;
  });
  return mostFrequent;
};
//----------------------------------------------------3
/*Что вернет выражение z(x) ?
undefined
Напишите ответ как вы понимаете
у z нету возвращаемого значения
*/
//--------------------------------------------------4
const debounce = (f, ms) => {
  let timeout;
  return function(...args) {
    const later = () => {
      timeout = null;
      f.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, ms);
  };
};