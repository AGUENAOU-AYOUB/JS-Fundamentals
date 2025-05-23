let firstArg = process.argv.slice(2);
let number = parseInt(firstArg);
if (!isNaN(number)) {
    for (let i = 0; i < number; i++){
        console.log('C is fun');
    }
} else {
    console.log('Missing number of occurrences');
}