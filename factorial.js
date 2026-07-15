// Write a function factorial(n) to calculate the factorial of a number using a recursive function
// factorial :- calculates the product of all positive integers up to \(n\)
// example : factorial of 7 - 7*6*5*4*3*2*1 = 5040;
// recursive function : A recursive function is a function that calls itself to solve a smaller version of the same problem.
function fectorial(n){
  if(n === 0 || n === 1){
    return 1;
  }
  return n*fectorial(n-1)
}

console.log(factorial(5)); // 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(3)); // 6   (3 * 2 * 1)
console.log(factorial(0)); // 1
