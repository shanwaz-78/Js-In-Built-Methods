// The Object.keys() method returns an array of a given object's own enumerable string-keyed property names.

const tryobj = {
    a : 'Something',
    b : false,
    c : 42,
};

console.log(Object.keys(tryobj))
// Expected output ['a','b','c'];