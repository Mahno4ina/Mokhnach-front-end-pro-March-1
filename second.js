function solution(arr) {
    let count = {};
    //tipotak?
    arr.forEach(num => count[num] = (count[num] || 0) + 1);
    let result = [];
    //tipotak??
    for (let num in count) {
      if (count[num] % 2 !== 0) {       
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
  //tipotak???
  function ezjQuery(selector) {
    let elements = [document.querySelector(selector)];
  
   function add(tag, content = '') {
      var el = document.createElement(tag);
      el.innerHTML = content;
      elements[elements.length - 1].appendChild(el);
      elements.push(el);
      return this;
    }
  
    function render() {
      var result = elements[0].outerHTML;
      elements = [document.querySelector(selector)];
      return result;
    }
  
    return {
      add: add,
      render: render
    };
  }
  var helloList = ezjQuery('body')
  .add('div')
  .add('ul')
  .add('li', 'Hello')
  .render();
  
  console.log(helloList);