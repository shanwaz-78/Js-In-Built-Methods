// The Object.isSealed() method determines if an object is sealed.

const obj = {
    name : 'Aabid',
    ip : 12464,
}

console.log(Object.isSealed(obj)) // output false;

Object.seal(obj);
console.log(Object.isSealed(obj)) // output true;
