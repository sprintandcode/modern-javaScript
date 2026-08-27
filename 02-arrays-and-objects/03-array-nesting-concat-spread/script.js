let x;

const fruits = ['Apple', 'Banana', 'Carrot', 'Grapes'];

const berries = ['Strawberries', 'Blueberries', 'Mulberries', 'Raspberries'];

const nuts = ['walnut', 'groundnut', 'Almond'];

// fruits.push(berries);

let nestedfruits = [fruits, berries] // creating a new array where it's elements are arrays itself

console.log(nestedfruits);

console.log(nestedfruits[0] [3]);   // accessing the elements from nested arrays


// Concatenating Arrays

// x = fruits.concat(berries);

// console.log(x);

// Using the spread operator

x = [...fruits, ...nuts];

console.log(x);

// Flatten Arrays

const flatArrays = [1, [2, 3], [4, 5, 6], 7];

console.log(flatArrays);

x = flatArrays.flat();   // flattens the nested arrays into flat main array

console.log(x);


// Static Methods on array objects

x = Array.isArray(fruits);  // checks if a given value is array or not

console.log(x);

x = Array.from('12345');  // creates an array from a set of values

console.log(x);

const a = 10;
const b = 12;
const c = 15;

x = Array.of(a, b, c);  // creates an array of values from different variables
console.log(x);
