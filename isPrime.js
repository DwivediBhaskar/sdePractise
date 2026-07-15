// Write a function that checks if a given number is prime. Name your function isprime
// A prime number is a whole number greater than 1 that can only be divided evenly by 1 and itself.
// If you try to divide a prime number by any other number, you will get a remainder or a decimal.
// The Two Rules of Prime NumbersIt must be a positive whole number greater than 1.
// It has exactly two factors: 1 and the number itself

function isPrime(num){
  if(num < 1) return false;
  if(num === 2) return true;
  if(num % 2 === 0) return false;
  let numRoot = Math.sqrt(num);
  for(let i = 3; i <= numRoot; i+=2){
    if(numRoot % i === 0 ){
      return false;
    }
  }
  return true;
}
