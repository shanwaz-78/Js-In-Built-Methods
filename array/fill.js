const arr = [1,2,3,4,5];
// fill with 0 from position 3 until position 5.
const val = arr.fill(0,3,5);

// expected output: [1, 2, 3, 0, 0]
const val2 = arr.fill(5,2);

// Expected output: [1,2,5,5,5];
console.log(val2)

