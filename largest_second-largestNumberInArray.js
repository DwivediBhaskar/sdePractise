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
