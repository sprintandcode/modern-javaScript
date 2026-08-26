// Ways to declare a variable
// var, let, const

let firstName = 'Ujjwal';
let lastName = 'Dhakal';

console.log(firstName, lastName);

let age = 27;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     owercase


// Reassigining variables

age = 30;
console.log(age);

let score;
score = 1;
console.log(score);

if (true) {
    score = score + 1;
}

console.log(score);

const x = 100;

// x = 200;

const arr = [1, 2, 3, 4];

arr.push(5);
console.log(arr);

// Declare multiple values at once

let a, b, c;

const d = 10, 
e = 11, f = 12;

console.log(d, e, f);