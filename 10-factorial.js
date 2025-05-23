let myArg = process.argv.slice(2);
let number = parseInt(myArg[0]);

//factorial function
function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
       return  num * factorial(num - 1);
    }
}
if (isNaN(number)) {
    console.log('1');
} else {
    console.log(factorial(number));
}