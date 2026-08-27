function sayHello() {               // defining a function
    console.log('Hello World');
}

sayHello();                         // invoking or calling a function


function add(num1, num2) {          // defining a function with parameters 
    console.log(num1 + num2);
}

add(5, 10);                         // passing argumments while calling the function

function subtract(num1, num2) {

    return num1 - num2;

    console.log('After the return')
}

const result = subtract(10, 3);
console.log(result);