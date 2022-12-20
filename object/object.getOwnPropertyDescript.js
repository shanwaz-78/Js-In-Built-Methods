// The Object.getOwnPropertyDescriptor() method returns an object describing the configuration of a specific property.
//  on a given object (that is, one directly present on an object and not in the object's prototype chain). 

const obj1 = new Object();
obj1.fruit = 'Apple';
obj1.color = 'red'

const obj2 = Object.getOwnPropertyDescriptor(obj1,'color');
console.log(obj2.configurable)
// Expected output true;