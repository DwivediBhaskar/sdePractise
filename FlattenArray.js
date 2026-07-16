// Q: Flatten a nested array (without using Array.flat());
// const nested = [1, [2, [3, 4], 5], 6];
// console.log(flattenRecursive(nested)); 
// Output: [1, 2, 3, 4, 5, 6]

const nested = [1, [2, [3, 4], 5], 6];
function flattenRecursive(arrData){
 let result = [];
 for(let i=0; i < arrData.length; i++){
    if(Array.isArray(arrData[i])){
        result.push(...flattenRecursive(arrData[i]))
    } else {
      result.push(arrData[i]);  
    }
 }
 return result;
}
console.log(flattenRecursive(nested)); 
// Output: [1, 2, 3, 4, 5, 6]

// Solve by  -Array.flat()
nested.flat(Infinity) // Output: [1, 2, 3, 4, 5, 6]
// Solve by reduce 
