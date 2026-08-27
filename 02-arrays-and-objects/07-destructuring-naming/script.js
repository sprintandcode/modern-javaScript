const firstName = 'Ujjwal';
const lastName = 'test';
const age = 27;

const person = {
    firstName, 
    lastName, 
    age,
};

console.log(person);

// Destructuring

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'ud',
    }
};

const { id, title, user, user: { name } } = todo;

console.log(id, title, user, name);

// Destructure arrays

const numbers = [23, 65, 12, 89];

const [fst, snd] = numbers;

console.log(fst, snd);

// The rest operator is similar to spread operator but kind of in a reverse case (destructure)

const [first, second, ...rest] = numbers;

console.log(first, second, rest);