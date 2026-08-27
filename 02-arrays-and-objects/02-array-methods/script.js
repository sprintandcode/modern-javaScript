// Basic Array Methods

const arr = [34, 67, 12, 90, 45];


arr.push(49);   // 49 gets added to the end

console.log(arr);

arr.pop(49);    // 49 gets removed from the end 

console.log(arr);

arr.unshift(99);    // 99 gets added at the beginning  

console.log(arr);

arr.shift(49);    // 99 gets removed from the beginning 

console.log(arr);

arr.reverse();    // reverses the array 

console.log(arr);

let x;

x = arr.indexOf(90);    // gives the index of an array element 

console.log(x);

x = arr.slice(1);    // slices from the given index (1) to the end 

console.log(x);

x = arr.slice(1, 3);    // slices from the given index (1) to before the another index

console.log(x);

x = arr.splice(1);    // also changes the original array 

console.log(x);

numb = [23, 45, 67, 78, 12];

let z = numb.splice(1,3).reverse().toString().charAt();

console.log(z);

