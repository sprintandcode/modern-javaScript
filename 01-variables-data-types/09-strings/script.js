let x;

const name = 'Ujjwal';
const age = 27;

// Concatenating a string

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.'
console.log(x);

// using Template Literal
x = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(x);

// String Properties and Methods

const r = 'Hello World';
x = typeof r;
console.log(x)

const j = 'What is your name?'
x = j.length;  // using a length property. properties don't use paranthesis.
console.log(x);

const s = new String ('Hello World');  // creates a string object 
x = typeof s;
console.log(x);

x = s[1];
console.log(x);

x = s.toUpperCase();   // Method
console.log(x);

x = s.toLowerCase();
console.log(x);

x = s.charAt(1);
console.log(x);

x = s.slice(-10, -6);  // with slice we can start at beginning or end
console.log(x);


const q = '      Hello World        ';
x = q.trim();  // trims the whitespace
console.log(x);

x = x.replace('World', 'Ujjwal');  // checks for 'World' and replaces with 'Ujjwal'
console.log(x);

x = x.includes('jj');
console.log(x)