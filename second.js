function findCommonPrefix(strList) {
  if (strList.length === 0) {
    return "";
  }
  let prefix = strList[0];
  for (let i = 1; i < strList.length; i++) {
    while (strList[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") {
        return "";
      }
    }
  }
  return prefix;
}

//_________________________________________________________________________________
function transformArray(arr, size = 3) {
  const newArr = [];
  let subArr = [];
  for (let i = 0; i < arr.length; i++) {
    const subArrLen = arr[i].length;
    if (subArrLen < size) {
      subArr.push(...arr[i]);
    } else if (subArrLen === size) {
      if (subArr.length > 0) {
        newArr.push(subArr);
        subArr = [];
      }
      newArr.push(arr[i]);
    } else {
      let j = 0;
      while (j < subArrLen) {
        if (subArr.length === size) {
          newArr.push(subArr);
          subArr = [];
        }
        subArr.push(arr[i][j]);
        j++;
      }
    }
  }
  if (subArr.length > 0) {
    newArr.push(subArr);
  }
  return newArr;
}
