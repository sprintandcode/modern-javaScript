const items = ['books', 'tables', 'chairs', 'bats'];
const users = [{name: 'Brad'}, {name: 'Kate'}, {name: 'Brian'}];


for (const item of items) {
    console.log(item);
}

for (const user of users) {
    console.log(user);
}

// Loop over Strings

const str = 'Hello World';

for (const letter of str) {
    console.log(letter);
}

// Loop over Maps

const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
    console.log(key, value);
}