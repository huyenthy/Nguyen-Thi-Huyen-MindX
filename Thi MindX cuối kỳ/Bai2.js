function alternatingSums(a) {
    let result =  [0,0]
    for(let i=0;i  < a.length;++i ) {
      if (i % 2 === 0) {
          result[0] += a[i]
      } else {
          result[1] += a[i]
      }
    }
    return result;
  }
  console.log(alternatingSums([1,2,4,5,6,7,8
  ]))