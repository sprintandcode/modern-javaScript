// The Call Stack

/*
1. Stack of cunctions to be executed.
2. Manages execution contexts.
3. Stacks are LIFO: Last In First Out.
*/

// First Example

function first() {
  console.log('first...');
}

function second() {
  console.log('second...');
}

function third() {
  console.log('third...');
}

first();
second();
third();

// Second Example

function first() {
  console.log('first...');
  second();
}

function second() {
  console.log('second...');
  third();
}

function third() {
  console.log('third...');
}

first();