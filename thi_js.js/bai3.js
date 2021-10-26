let arr =  prompt('input: ')
  function removeDuplicate(arr) {
    return Array.from(new Set(arr))
  }
  console.log(removeDuplicate(arr))