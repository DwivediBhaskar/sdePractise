
//  Find duplicate elements in an array
function findDupliCate(arr){
    for (let i = 0; i < arr.length; i++){
        if(i !== arr.lastIndexOf(arr[i])){
            return {"dupliCateFound": arr[i]};
        }
    }
    return true;
}
// Example:
function mergeArrayss(original, newArray) {
  return [...original, ...newArray].reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
}

// Example:
const arr11 = [1, 2, 3, 4];
const arr12 = [3, 4, 5, 6];
console.log(mergeArrayss(arr11, arr12)); 
// Output: [1, 2, 3, 4, 5, 6]


function removedDuplicate(arr1,arr2){
    let arr = [...arr1,...arr2];
    const result = arr.reduce((item,data) => {
        if(!item.includes(data)){
            item.push(data)
        }
        return item
    },[])
    return result;
}
function mergeArrays(arr1,arr2){
    for (let i =0; i < arr2.length; i++){
        if(!arr1.includes(arr2[i])){
            arr1.push(arr2[i])
        }
    }
    return arr1;
}
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log(mergeArrays(arr1, arr2)); 
console.log(removedDuplicate(arr1, arr2)); 
/*
        Given an integer array nums, return true if any value appears at
        least twice in the array, and return false if every element is
        distinct.
        Input: nums = [1,2,3,1]
        Output: true
*/


function containsDuplicate(nums) {
    // Create a Set to store unique elements
    let uniqueSet = [];

    // Iterate through the array
    for (let num of nums) {
        // Check if the element is already in the Set
        if (uniqueSet.includes(num)) {
            return true; // Duplicate found
        }
        // Add the element to the Set
        uniqueSet.push(num);
    }
    // No duplicates found
    return false;
}

// Example usage:
const nums = [1, 2, 3, 1];
const result = containsDuplicate(nums);
console.log('result', result);
// Output: true

// second example

function duplicateUnieqValues(nums) {
    // Create a Set to store unique elements
    let uniqueSet = [];
    let duplicate = [];
    // Iterate through the array
    for (let num of nums) {
        // Check if the element is already in the Set
        if (uniqueSet.includes(num)) {
            // Add the element to the  Duplicate
            duplicate.push(num);
        } else {
            // Add the element to the Set unieq
            uniqueSet.push(num);
        }

    }
    // No duplicates found
    return {
        uniqueSet, duplicate
    };
}

/*
function duplicateUnieqValues(arr){
    return arr.reduce((nums,num)=>{
        if(!nums.includes(num)){
            nums.push(num)
        }
        return nums
    },[])
}
*/
// Example usage:
const testData = [1, 2, 3, 1,7,8,5,4,4,4,3,3,3,4,1,6];
const res = duplicateUnieqValues(testData);
console.log('res', res);
/* Output: {
  uniqueSet: [
    1, 2, 3, 7,
    8, 5, 4, 6
  ],
  duplicate: [
    1, 4, 4, 3,
    3, 3, 4, 1
  ]
} */

// 3 Example
// second example

function duplicateUnieqSingleValues(nums) {
    // Create a Set to store unique elements
    let uniqueSet = [];
    let duplicate = [];
    // Iterate through the array
    for (let num of nums) {
        // Check if the element is already in the Set
        if (uniqueSet.includes(num) && !duplicate.includes(num)) {
            // Add the element to the  Duplicate
            duplicate.push(num);
        } else if (!uniqueSet.includes(num)){
            // Add the element to the Set unieq
            uniqueSet.push(num);
        }

    }
    // No duplicates found
    return {
        uniqueSet, duplicate
    };
};
const resSingle = duplicateUnieqSingleValues(testData);
console.log('resSingle', resSingle);
/**
 * OUTput 
 * 
 * resSingle {
  uniqueSet: [
    1, 2, 3, 7,
    8, 5, 4, 6
  ],
  duplicate: [ 1, 4, 3 ]
}
*/
