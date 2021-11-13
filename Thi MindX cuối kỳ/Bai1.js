
function allLongestStrings(inputArray) {
    let max = inputArray[0].length;
    inputArray.map(v => max = Math.max(max, v.length));
    result = inputArray.filter(v => v.length == max);
    return result;
 }
 console.log(allLongestStrings(['a', 'aa', 'aaa',
    'aaaaa', 'aaaa','11111','22222'
 ]))
