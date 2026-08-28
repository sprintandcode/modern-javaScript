console.log("=== Ternary Operator ===");

// 1. Basic ternary operator
// condition ? valueIfTrue : valueIfFalse

const age = 20;

const result = age >= 18 ? "Adult" : "Minor";

console.log(result);


// 2. Ternary with a login check

const isLoggedIn = true;

const message = isLoggedIn ? "Welcome back!" : "Please log in.";

console.log(message);


// 3. Ternary with numbers

const number = 10;

const type = number % 2 === 0 ? "Even" : "Odd";

console.log(type);