let myArg = process.argv.slice(2);
let number = parseInt(myArg);

if (!isNaN(number)) {
    for (let i = 0; i < number; i++){
        console.log('X'.repeat(number));
    }
} else {
    console.log('Missing size');
}