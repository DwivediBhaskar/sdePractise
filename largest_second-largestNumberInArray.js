// Q: Find the largest/second-largest number in an array
function findLargestAndSecondLargest(arrData){
 let l1 = -Infinity;
 let l2 = -Infinity;
  for (let i = 0; i < arrData.length; i++){
    if(arrData[i] > l1){
      l2 = l1
      l1 = arrData[i];
    } else if(arrData[i] > l2){
      l2 = arrData[i];
    }
  }
    return {"l1":l1,"l2":l2};
}

const testData = [1, 2, 3, 15,55,7];
console.log( findLargestAndSecondLargest(testData)); // { l1: 55, l2: 15 }

//only Second Largest - 
// We initialize an accumulator object with largest = -Infinity and second = -Infinity.
// For each number:
// If it’s bigger than the current largest → shift largest down to second, and update largest.
// Else if it’s bigger than second (but not equal to largest) → update second. At the end, we return second.
function findSecondLargestNo(arr) {
  let { largest, second } = arr.reduce(
    (acc, num) => {
      if (num > acc.largest) {
        // New largest found
        acc.second = acc.largest;
        acc.largest = num;
      } else if (num > acc.second && num !== acc.largest) {
        // Update second largest if it's smaller than current num
        acc.second = num;
      }
      return acc;
    },
    { largest: -Infinity, second: -Infinity }
  );

  return second;
}

console.log(findSecondLargestNo([12, 35, 1, 10, 34, 1])); // Output: 34
// (shorter but less efficient)
function findSecondLargestNo(arr) {
  return [...new Set(arr)] // remove duplicates
    .sort((a, b) => b - a)[1]; // sort descending and take second
}

console.log(findSecondLargestNo([12, 35, 1, 10, 34, 1])); // Output: 34

