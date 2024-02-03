/*
    Given an array of integer nums and an integer target, return
    indices of the two numbers such that they add up to the target.
    You may assume that each input would have exactly one solution,
    and you may not use the same element twice.
    You can return the answer in any order.

    Input: nums = [2,7,11,15], target = 9
    
    Output: [0,1]
    
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/
var input = [2,7,11,15];
var target = 9;
function twoSum(input, target){
    let result = [] // or [] for store index
    for (let x=0; x < input.length; x ++){
        let complement = target - input[x];
        if(input.includes(complement)){
            let complementIndex = input.indexOf(complement);
            result.push(x,complementIndex);
            return result;
        };
    }
    return [];
};
let indOfSum = twoSum(input, target);
console.log('indOfSum',indOfSum);

/*
function twoSum(input, target){
    let result = [] // or [] for store index
    for (let x=0; x < input.length; x ++){
        let complement = target - input[x];
        if(input.includes(complement)){
            let complementIndex = input.indexOf(complement);
            if(!result.includes(x)){
                result.push(x,complementIndex);
            }
        };
    }
    return result;
    return [];
};
*/