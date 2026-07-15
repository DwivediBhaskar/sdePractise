// The cleanest and fastest way to check if a string is a palindrome in JavaScript is by reversing the string and comparing it to the original
// madam === madam : true, Hello === Olleh : false,
// .replace(/[^a-z0-9]/g, '');
function isPalindrome(str){
  let cleanString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0 ;
  let right = cleanString.length - 1;
    while(left < right){
     if(cleanString[left] !== cleanString[right]){
       return false
     }
      left ++;
      right --;
    }
  return true;
};
// Method 2
function isPalindromCheck(str){
  return str = str.split('').reverse().join('');
}
