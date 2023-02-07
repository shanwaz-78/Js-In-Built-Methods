// The Object.isExtensible() method determines if an object is extensible.
//  (whether it can have new properties added to it).

const tryobj = new Object();

console.log(Object.isExtensible(tryobj));
// Expected output true;
Object.preventExtensions(tryobj);
// we cannot add any value on this obj after use this method;
console.log(Object.isExtensible(tryobj))
// Expected output false;

function getRandom(max,min) {
    const x = Math.floor(Math.random() * (max - min)) + 70;
    return x
}

console.log(getRandom(101,70))
