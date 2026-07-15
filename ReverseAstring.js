// Q.Reverse a string without using built-in reverse()

function reverseStr(str){
    let resultStr = "";
     for (let i = str.length -1; i >=0; i--){
        resultStr += str[i];
     }
     return resultStr;
}

// Use two pointers to swap elements into the new array from outside-in
  let left = 0;
  let right = len - 1;
  
  while (left <= right) {
    result[left] = str[right];
    result[right] = str[left];
    left++;
    right--;
  }
  
  // Join the array elements into a single string at the very end
  return result.join('');
}

console.log(reverseStringOptimized("javascript")); // "tpir

function reverseStringModern(str) {
  let reversed = "";
  for (const char of str) {
    reversed = char + reversed; // Places the new character at the beginning
  }
  return reversed;
}
console.log(reverseStringModern("apple")); // "elppa"

const reverseStringFunctional = str => 
  str.split('').reduce((reversed, char) => char + reversed, '');
console.log(reverseStringFunctional("world")); // "dlrow"
