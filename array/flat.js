// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const array1 = [10,15,20,[25,30]];
const val = array1.flat();
// Expected output [10,15,20,25,30];

console.log(val)

const arr2 = [0, 1, 2, [[[3, 4]]]];
const val2 = arr2.flat(Infinity);
// Expected output [0,1,2,3,4];

console.log(val2)
