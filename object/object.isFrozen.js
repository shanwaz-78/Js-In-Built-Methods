// The Object.isFrozen() determines if an object is frozen.

const obj1 = new Object();

obj1.color = 'red';
obj1.fruitName = 'Blue Berry';

console.log(Object.isFrozen(obj1))
// Expected output false;

Object.freeze(obj1)
console.log(Object.isFrozen(obj1));
// Exptected output true;