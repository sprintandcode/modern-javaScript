console.log("=== Logical Assignment Operators ===");

// 1. AND Assignment (&&=)
// Assigns the new value only if the current value is truthy

let username = "Ujjwal";

username &&= "Admin";

console.log("AND assignment:", username);


// 2. OR Assignment (||=)
// Assigns the new value only if the current value is falsy

let user = "";

user ||= "Guest";

console.log("OR assignment:", user);


// 3. Nullish Coalescing (??)
// Uses the new value only if the current value is null or undefined

let name = null;

name = name ?? "Unknown";

console.log("Nullish coalescing:", name);


// 4. Comparing || and ??
let age = 0;

console.log("Using ||:", age || 18);
console.log("Using ??:", age ?? 18);


// 5. Another example with undefined
let country;

country = country ?? "Nepal";

console.log("Country:", country);