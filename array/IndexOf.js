// The indexOf() method returns the first index at which a given element can be found in the array, 
// or -1 if it is not present.

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf("camel"));
// Expexted output 2;

console.log(beasts.indexOf("bison",2));
// Expected output 4;

console.log(beasts.indexOf("cat",2));
// Expected output -1;
