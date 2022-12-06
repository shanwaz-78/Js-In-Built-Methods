// The keys() method returns a new Array Iterator object that contains the keys for each index in the array.

const arr = [10,20,30];
const val = arr.keys();

for(const i of val){
    console.log(i);
}
// Expect output;
// 0;
// 1;
// 2;
