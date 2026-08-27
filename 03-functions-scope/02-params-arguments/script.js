function registeredUser (user) {
    if (!user) {
        user = 'Bot';
    }
    return user + ' is registered';
}

console.log(registeredUser());

// Rest Params
function sum(...numbers) {             // we can pass infinite number using the rest operator
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6));


function loginUser (user) {
    return `The User ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
    id: 1,
    name: 'Ujjwal',
};

console.log(loginUser(user));

console.log(loginUser({
    id: 2, 
    name: 'Sarah',
}));

// arrays as params

function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9]);