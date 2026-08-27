// Arrow functions was introduced with ES6 in 2016

// function add(a, b) {
//   return a + b;
// }
// console.log(add(1, 2));

const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => a-b;

// If there is only a single parameter parenthesis is not required or compulsory
const prod = a => a * 3;

// returning an object

const createObj = () => ({
    name: 'Brad',
});


const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
    console.log(n);
});

// arrow function in a callback
numbers.forEach((n) => console.log(n));

console.log(add(1, 2));
console.log(sub(5, 2));
console.log(prod(5));
console.log(createObj());
