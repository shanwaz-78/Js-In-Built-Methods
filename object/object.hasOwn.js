// The Object.hasOwn() static method returns true if the specified object has the indicated property as its own property. 
// If the property is inherited, or does not exist, the method returns false.

const obj1 = {
    fruitName : 'Apple',
    color : 'red',
};

console.log(Object.hasOwn(obj1,'fruitName'));
