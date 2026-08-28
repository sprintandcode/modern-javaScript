const email = 'test@test.com';

if (email) {
    console.log('You passed in an email');
}

console.log(Boolean(email));   // String is a truthy value hence the above statement is logged


/*
FALSY VALUES
- false
- 0
- "" or '' (Empty Values)
- NaN
- undefined
*/

/* 
TRUTHY VALUES
- Everything else that is not falsy
- true
- '0' in a string, 'false' in a string, ' ' empty space in a string
- [], {}, function () {}  (empty array, object or function)
*/

const x = false;
if (x) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy and falsy caveats

const children = 0;

if (children !== undefined) {
    console.log(`You have ${children} children`);
} else {
    console.log(`Please enter number of children`);
}

// checking for empty arrays

const post  = ['Post One', 'Post Two'];

if (post.length > 0) {
    console.log('List Posts');
} else {
    console.log('No Posts');
}

// Similarly we can check for undefined and empty structures early to avoid common caveats