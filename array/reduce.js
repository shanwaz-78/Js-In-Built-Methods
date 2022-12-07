// The reduceRight() method applies a function against an accumulator and each value of the array 
// (from right-to-left) to reduce it to a single value.

const arr = [1,2,3,4]
const sum = arr.reduce((accumlator,currentvale) => accumlator + currentvale);

console.log(sum)
// Expected output 10;
