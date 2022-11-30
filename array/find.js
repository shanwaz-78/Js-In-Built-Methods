// The find() method returns the first element in the provided array that satisfies the provided testing function. 
//  If no values satisfy the testing function, undefined is returned.

const num = [10,20,50,70,80];
const val = num.find(element => element >= 30); 
// Expected output 50.
console.log(val)
