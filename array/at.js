// const arr = ["Apple","Banana","Milk","Blue Berry"];
//  console.log(arr[1]) // Output "Banana"
//  // as you know we return the value of an array by their indexing;

// // think for a minute we need the last value of an array. in these case we can use (at()) method. For Instance.
// console.log(arr.at(-1)) // Output "Blue berry";
//  // if wee give him value in negetive it will return the last value of an array.
//  // & it will possible only with (at()) method.

//  let index = 3;
//  const val = `${index} ${arr.at(index)}`;
//  console.log(val)

//  //The following example provides a function which returns the last element found in a specified array..
//  const ex1 = [1,3,5,7,9];
//  // A function which returns the last item of a given array
//  function fn() {
//     return ex1.at(-1)
//  }
//  // Get the last item of our array 'ex1'
//  const val2 = fn(ex1);
//  console.log(val2)

//  // add an item to our array 'ex1';
//  ex1.push(11);
//  const val3 = fn(ex1);
//  console.log(val3)

const arr = [1,2,3,4,5];
arr.at(-1);
console.log(arr)
