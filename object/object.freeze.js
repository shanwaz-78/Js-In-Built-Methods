// The Object.freeze() method freezes an object. 
// Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. 
// A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, 
// their enumerability, configurability, writability, or value cannot be changed,
//  and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.

const obj = new Object();
obj.Fruit = 'Banana';
obj.color = 'yellow';

Object.freeze(obj);
// we cannot reassign and delete any property in an object after using these method.
obj.Fruit = 'Apple';
delete obj.color;
console.log(obj)