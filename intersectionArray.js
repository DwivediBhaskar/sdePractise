// Q. Find the intersection of two arrays
// To find the intersection of two arrays, you need to extract the elements that appear in both arrays.
// [ 2, 3 ] [ 3, 4, 5 ]
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 3, 5, 6, 7];

function byNewM(arr1,arr2){
    const set = new Set(arr1);
    let result = [];
    for(let num of arr2){
        if(set.has(num)){
            result.push(num);
            set.delete(num) // remove duplicate
        }
    }
    return result;
}

let arrA = [1,2,3];
let arrB = [2,3,4];
// output = [2,3];
function interSectionArray(arrA,arrB){
    let interSecArr = [];
    for(let i =0; i < arrB.length; i++){
        if(arrA.indexOf(arrB[i]) >=0){
            interSecArr.push(arrB[i]);
        }
    }
    return interSecArr;
}
console.log(reverceStr('madam'),interSectionArray(arrA,arrB), byNewM(arr1,arr2));
