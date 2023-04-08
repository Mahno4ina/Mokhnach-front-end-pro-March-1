function solution(lst) {
  let count = {};
  for (let i = 0; i < lst.length; i++) {
    let num = lst[i];
    if (num in count) {
      count[num] += 1;
    } else {
      count[num] = 1;
    }
  }
  let result = [];
  for (let num in count) {
    if (count[num] === 1) {
      result.push(parseInt(num));
    }
  }
  return result;
}

console.log(solution([12, 23, 34, 12, 12, 23, 12, 45]));
console.log(solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100]));
console.log(solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]));
console.log(solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]));
console.log(solution([2, 2, 44, 44]));

function ezjQuery(tagName) {
  let htmlString = `<${tagName}></${tagName}>`;

  function add(newTagName, content = '') {
    htmlString = htmlString.replace(`</${tagName}>`, `<${newTagName}>${content}</${newTagName}></${tagName}>`);
    return this;
  }

  function render() {
    return htmlString;
  }

  return {
    add,
    render
  };
}
var helloList = ezjQuery('body')
.add('div')
.add('ul')
.add('li', 'Hello')
.render();

console.log(helloList);