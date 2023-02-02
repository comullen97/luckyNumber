// Write your code below this line.

var arr = [];
while(arr.length <= 5){
    var n = Math.floor(Math.random() * 9) + 1;
    if(arr.indexOf(n) === -1) arr.push(n);
}
console.log(arr)
