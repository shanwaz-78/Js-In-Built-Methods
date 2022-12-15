// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. 
// It returns the modified target object.a

const obj1 = {a:1, b:3, c:6};
const obj2 = {a:2,d:8};

const val = Object.assign(obj1,obj2);
console.log(val)
// Expected output {a:2, b:3, c:6, d:8};