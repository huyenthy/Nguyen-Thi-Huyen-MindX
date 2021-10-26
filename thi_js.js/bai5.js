// A
var d = new Date(30/4/2019)
console.log(d.toString());
// B
let d = parseInt(prompt("Enter one day"))
let m = parseInt(prompt("Enter one month"))
let y = parseInt(prompt("Enter one year"))
if (d < 28) {
    d = d+1
}
if (d == 28 && m == 2){
    if(y % 4 == 0 && y % 100 != 0)
    { 
        d = 29
    }
    else {
        d = 1
        m = 3
    }
}

if ((m ==4 || m == 6 || m ==9 || m ==11) && d == 30) {
    d = 1
    m = m+1
}
if (d == 31 && (m == 1|| m == 3 || m == 5 || m == 7 || m == 8 || m == 10)) {
    d = 1
    m = m+1
}
if (d == 31 && m == 12) {
 	d = 1
    m = 1
    y = y+1
}

console.log(d, m, y)
