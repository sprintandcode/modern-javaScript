let x, y, z, a;

const person = {
    name : 'John Doe',
    age : 27,
    isAdmin : true, 
    address: {
        street: 'Hadigau',
        state: 'Bagmati',
        country: 'Nepal'
    }
};

x = person.name;      // access a specific property using .
y = person['age'];    // access a specific property using property[]
z = person.address
a = person.address.state;
console.log(x, y, z, a);  

// deleting a property

delete person.address.state;

console.log(person);

// You can also pass a function as a property within object literal

person.greet = function () {
    console.log(`Hello, My name is ${this.name}.`)
}

person.greet();
