// The filter() method creates a shallow copy of a portion of a given array, 
// filtered down to just the elements from the given array that pass the test implemented by the provided function.

const arr = ["Graps","Apple","Milk","Bananas","Butter Milk"];
const val = arr.filter(word => word.length >= 6);
// Expected output: ["Bananas", "Butter Milk"]
console.log(val)
