const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

let sumPos = 0;
let countPos = 0;
let min = arr[0];
let minIndex = 0;
let max = arr[0];
let maxIndex = 0;
let countNeg = 0;
let countOdd = 0;
let countEven = 0;
let sumEven = 0;
let sumOdd = 0;
let productPos = 1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sumPos += arr[i];
    productPos *= arr[i];
    countPos++;
    if (arr[i] % 2 === 0) {
      countEven++;
      sumEven += arr[i];
    } else {
      countOdd++;
      sumOdd += arr[i];
    }
  } else {
    countNeg++;
  }
  if (arr[i] < min) {
    min = arr[i];
    minIndex = i;
  }
  if (arr[i] > max) {
    max = arr[i];
    maxIndex = i;
  }
}

console.log(`Sum of positive elements: ${sumPos}`);
console.log(`Count of positive elements: ${countPos}`);
console.log(`Min element: ${min}`);
console.log(`Index of min element: ${minIndex}`);
console.log(`Max element: ${max}`);
console.log(`Index of max element: ${maxIndex}`);
console.log(`Count of negative elements: ${countNeg}`);
console.log(`Count of odd positive elements: ${countOdd}`);
console.log(`Count of even positive elements: ${countEven}`);
console.log(`Sum of even positive elements: ${sumEven}`);
console.log(`Sum of odd positive elements: ${sumOdd}`);
console.log(`Product of positive elements: ${productPos}`);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== max) {
    arr[i] = 0;
  }
}

console.log(`Array after zeroing all elements except for the max: ${arr}`);
