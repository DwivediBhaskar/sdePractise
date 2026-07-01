//An anagram problem asks whether two strings contain the same characters in any order. 
//The easy way in JavaScript is to sort the characters and compare, or use frequency counts.
// Method 1: Sort and Compare (Simple & Clear)
function isAnagram(str1,str2){
  str1 = str1.replace(/\s+/g, '').toLowerCase();
  str2 = str2.replace(/\s+/g,'').toLowerCase();
   // Sort letters and compare
  return str1.split('').sort().join('') === str1.split('').sort().join('');
}
// Example
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false

// Method 2: Frequency Counter (Efficient for Large Strings)
// first comapre the length of string
// assign one str chr count and will comapre with second str charecter
function isanagramTwo(str1,str2){
  if(str1.length() !== str2.length()){
    return false;
  }
  let count = {};
 for(let chr of str1){
   count[chr] = (count[chr] || 0)+1;
 }
  for (let chr of str2){
    if(!count[chr]{
      rturn false
    }
  }
  return true;
}
