//iterative
// function fibonacci(num) {
//   const fib = [0, 1];
//   if (num < 2) return num;
//   for (let i = 2; i <= num; i++) {
//     let sum = fib[0] + fib[1];
//     [fib[0], fib[1]] = [fib[1], sum];
//   }
//   return fib[1];
// }

//recursive
let stacks = 0;
cache = [];
function fibonacci(num) {
  stacks++;
  if (num < 2) return num;
  if (cache[num]) return cache[num];
  cache[num] = fibonacci(num - 2) + fibonacci(num - 1);
  return cache[num];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));
  console.log(stacks);

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));
  console.log(stacks);

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
  console.log(stacks);
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

// fib = [0, 1]
// if num is less than 2, return num
// loop through i=2 through num
//      sum = fib[0]+fib[1]
//      fib[0] = fib[1]
//      fib[1] = sum
// return fib[1]

/*
base case: if num<2, return num
return fib(num-1) plus fib(num-2)
*/
