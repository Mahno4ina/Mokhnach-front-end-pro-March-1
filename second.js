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

function Tag(tagName, content) {
  this.tagName = tagName;
  this.content = content || '';
  this.children = [];
  this.addAttribute = function (attr, value) {
    this[attr] = value;
  };
  this.addChild = function (tag) {
    this.children.push(tag);
  };
  this.render = function () {
    var html = '<' + this.tagName;
    for (var attr in this) {
      if (this.hasOwnProperty(attr) && attr !== 'tagName' && attr !== 'content' && attr !== 'children') {
        html += ' ' + attr + '="' + this[attr] + '"';
      }
    }
    html += '>';
    if (this.content) {
      html += this.content;
    }
    if (this.children.length > 0) {
      for (var i = 0; i < this.children.length; i++) {
        html += this.children[i].render();
      }
    }
    html += '</' + this.tagName + '>';
    return html;
  };
}

function ezjQuery(selector) {
  var tag = new Tag(selector);
  var currentTag = tag;
  return {
    add: function (tagName, content) {
      var newTag = new Tag(tagName, content);
      currentTag.addChild(newTag);
      return this;
    },
    render: function () {
      return tag.render();
    }
  };
}