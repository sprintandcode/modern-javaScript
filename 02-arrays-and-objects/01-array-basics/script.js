let x;

// Array literal: is more common
const numbers = [1, 23, 4, 56, 4];

console.log(numbers);

// Array constructor

const fruits = new Array('Apple', 'Mango', 'Grapes', 'Pear');

console.log(fruits);

x = numbers[0];

x = numbers[0] + numbers[3];

console.log(x);

x = numbers.length;

console.log(x);

fruits[2] = 'PineApple';  // Arrays are mutable

console.log(fruits); 


fruits[fruits.length] = 'BlueBerries';  //length of an array is always one more than the index hence the value is added at last

console.log(fruits);