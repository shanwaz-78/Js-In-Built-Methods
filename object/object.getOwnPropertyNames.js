// The Object.getOwnPropertyNames() method returns an array of all properties.
//  (including non-enumerable properties except for those which use Symbol) found directly in a given object.

const obj1 = {};

const obj2 = Object.create(obj1);
obj2.name = 'Shanwaz';
obj2.class = '11th';

console.log(Object.getOwnPropertyNames(obj2));
// He makes the array of all given obj properties and returns that array.
// Expected output ['name','class'];