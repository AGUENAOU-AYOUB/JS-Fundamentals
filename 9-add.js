let myArg = process.argv.slice(2);
let num1 = parseInt(myArg[0]);
let num2 = parseInt(myArg[1]);

function addition(a, b) {
    return a + b;
}
if (!isNaN(num1, num2)) {
    console.log(addition(num1, num2));
} else {
    console.log('NaN');
}