let x;

const testObject = new Object();  

const todo = {};     // same thing as above

todo.id = 1;
todo.name = 'Ujjwal';
todo.completed = false;

x = todo;

console.log(x)

const person = {
    address: {
        coords: {
            lat: 42.9784,
            lon: -71.2324
        },
    },
};

x = person.address.coords.lat;

// spread operators with object literals

const obj1 = {a: 1, b:2};
const obj2 = {c: 3, d:4};

const obj3 = {...obj1, ...obj2};   
const obj4 = Object.assign({}, obj1, obj2); // creates a new object and assignes the mentioned objects, same as spread 

x = obj3;

console.log(x);

// similarly we can access the contents of objects using index and property names

// x = todo[0].name;
// console.log(x);

// we can extract keys or values of an object in an array
x = Object.keys(todo);
console.log(x);

x = Object.values(todo);
console.log(x);