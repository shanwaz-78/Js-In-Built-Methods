// The Object.entries() method returns an array of a given object's,
// own enumerable string-keyed property key-value pairs.

const obj = new Object();
obj.a = 'Apple';
obj.b = 33;

// Entries method make an array of every property's in an object.

const val = Object.entries(obj);
console.log(val[1][1])
// Expected output 33;
