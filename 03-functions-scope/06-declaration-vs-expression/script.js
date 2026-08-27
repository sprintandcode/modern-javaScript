// creating a function with function declaration

console.log(addDollarSign(100));

function addDollarSign(value) {       // regular functions can be called anywhere
    return '$' + value;
}


// creating a function with function expression
console.log(addPlusSign(200));         // function expression cannot be accessed before initialization

const addPlusSign = function (value) {
    return '+' + value;
}


// Hoisitng is the process of moving all the functions and variable declarations at the top of the scope, file or page.
// Before the code is executed all the required declarations is looked before they are executed