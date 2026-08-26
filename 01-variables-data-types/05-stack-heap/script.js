// Values that are stored on the stack
const name = 'Ujjwal';   // Initial valu8e stored on stack
const age = 27;          // Initial valu8e stored on stack

// Values that are stored on the heap
const person = {         // Initial value stored on heap
    name: 'Brad',
    age: 40
}

let newName = name;         
newName = 'Jonathon';     // new value stored on stack

let newPerson = person;      // newPerson object now refers to the existing object 'person'
newPerson.name = 'Bradley';  // updates the value in object 'person' using the reference

console.log(name, newName);
console.log(person, newPerson);