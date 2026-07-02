//The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1.
//After that, the next term is defined as the sum of the previous two terms.
//The recurrence relation defines the sequence Fn of Fibonacci numbers:

/*. Write the code to find the Fibonacci series upto the nth term.
This problem asks to generate the Fibonacci sequence up to the nth term. In this sequence,
each number is the sum of the two preceding ones, starting from 0 and 1.
The goal is to calculate and display all Fibonacci numbers from the 0th to the nth term.
Example for n = 10:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34   
(Writing: Start with 0 and 1 → 0+1=1 → 1+1=2 → 1+2=3 → 2+3=5 → and so on.)*/
let result = [];
function fibonacciSerires(num){
  let a=0; b=1;
  for (let i=0; i < num; i++){
    result.push(a);
    let next = a+b;
    a=b;
    b=next;
  }
  return result;
}


// Method 2 
function fibonacci(num) {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 2;
    while (i < num) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        i += 1;
    }
    return num2;
}

console.log("Fibonacci(5): " + fibonacci(15));
console.log("Fibonacci(8): " + fibonacci(18));
