//The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

const array1 = ["Apple","Banana","Milk"];
const Iterator1 = array1.entries();

console.log(Iterator1.next().value);
// expected output: Array [0, "Apple"]

console.log(Iterator1.next().value);
// expected output: Array [1, "Banana"]

