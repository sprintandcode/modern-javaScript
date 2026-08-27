// Execution Context

/*
When you run any JavaScript, a special environment is created to handle the transformation & execution of code.
This is called the execution context. It contains the currently running code and everything that aids in its execution.
There is a global execution context as well as a function execution context for every function invoked.


JavaScript is a single threaded and code is executed line by line on the thread.
Create a new execution context for each function call.

 
# Memory Creation Phase

1. Create the global object (browser = `window`, Node.js = `global`)
2. Create the `this` object and bind it to the global object
3. Set up the memory heap for storing variables and function references
4. Store functions and variables in the global execution context and set them to `undefined`

*/

const x = 100;
const y = 50;

function getSum(n1, n2) {
  const sum = n1 + n2;
  return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

console.log(sum1, sum2);