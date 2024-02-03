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