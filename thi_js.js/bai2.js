
let str = prompt()
function firstUppercase(str) {
    return str.split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  }
// test
firstUppercase('hello a')
  