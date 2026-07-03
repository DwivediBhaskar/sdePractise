// Q. How do you find the maximum difference between any two elements in an input array?
/*
You can solve this one by iterating over the input array and calculating the max and min values at the same time. 
At the end, you can return the difference between those values.
*/
function calCulateMaxDiff(arr){
  if (inp.length < 2) return 0;
  let minValue = arr[0];
  let maxValue = arr[1];
  for(let i=2; i < arr.length; i++){
    if(arr[i] < minValue){
      minValue = arr[i];
    } else if(arr[i] > maxValue){
      maxValue = arr[i];
    }
  }
  return maxValue-minValue;
};
calCulateMaxDiff([5, 2, 9, 1]) // result : 8

//Q. True Minimum Difference)
// If you want the smallest difference between any two numbers in the array:
function findMinDiff(arr){
  if (arr.length < 2) return 0;
  arr.sort((a,b)=>a-b);
  let minDiff = Infinity;
  for(let i = 1; i < arr.length; i++){
    let diff = arr[i] - arr[i-1];
    if(diff < minDiff){
      minDiff = diff;
    }
  }
  return minDiff;
}
