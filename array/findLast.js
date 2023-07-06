// The findLast() method iterates the array in reverse order 
// and returns the value of the first element that satisfies the provided testing function. 
// If no elements satisfy the testing function, undefined is returned.

const array1 = [5, 12, 50, 130, 44];
const found = array1.findLast(element => element >= 45);
// Expected output 130;
console.log(found)
