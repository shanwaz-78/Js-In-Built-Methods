// The Object.values() method returns an array of a given object's own enumerable string-keyed property values.

const trlobj = {
    name : "SomeString",
    b : 42,
    c : false,
};

console.log(Object.values(trlobj))

// Arraw Function;
const fn = num => `${num / 600 * 100}`; console.log(fn(303));
// Get Percentege with arraw function;

const fn2 = (fname,lname) => `${fname} ${lname}`; 
console.log(fn2('Shannwaz','Saleh'))