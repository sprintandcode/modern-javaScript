// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';
console.log(myString);

myNewString = myString.charAt(0).toUpperCase();
myNewString = myNewString + myString.slice(1);
console.log(myNewString);

// OR

myNewString = myString.charAt(0).toUpperCase() + myString.slice(1);

console.log(myNewString);

