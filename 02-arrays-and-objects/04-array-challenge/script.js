// Challenge 1
const arr = [1, 2, 3, 4, 5]; 

// Result to obtain : // [6, 5, 4, 3, 2, 1, 0];

arr.push(6);         // add 6 to the end of the array
arr.unshift(0);      // add 0 to the start of the array
arr.reverse();       // reverse the order of the array
console.log(arr);    // hence the required output



// Challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Result to obtain : [1,2,3,4,5,6,7,8,9,10]

const arr3 = [...arr1, ...arr2];    // using the spread operator for arrays  
arr3.splice(4, 1);                  // since 5 is repeated twice splice it's index value for onwe position

console.log(arr3);