// Write a function sumArray(arr) that returns the sum of all the elements in an input array.
function sumArray(arr){
  return arr.reduce((acc,curr)=> acc+curr,0)
}
// Example usage
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([-1, 10, -5]));    // 4
// method2

function sumArrayB(arr){
  let total = 0;
  for(let i =0; i < arr.length; i++){
    total += arr[i]
  }
  return total;
}
// Q. Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc,curr)=> {
  acc[curr] = (acc[curr] || 0)+1; 
  return acc;
},{})

// Q. Example 3: Flatten an array
const nested = [[1, 2], [3, 4], [5]];
const result = nested.reduce((acc,data)=> acc.concat(data),[]);

/*
What reduce() Does
reduce() is an array method in JavaScript.
It takes a callback function and an initial value.
The callback runs for each element in the array, and it "reduces" the array into a single value (which could be a number, string, object, or even another array).
array.reduce((accumulator, currentValue, index, array) => {
  // logic
}, initialValue);
accumulator → the running result (starts as initialValue).
currentValue → the current element being processed.
index → the position of the current element (optional).
array → the original array (optional).
initialValue → the starting value for the accumulator.
*/
