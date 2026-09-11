// creating a promise

const promise = new Promise((resolve, reject) => {
    // Do some async task
    setTimeout(() => {
        console.log('Async task complete');
        resolve();
    }, 1000);
});

promise.then(() => {
    console.log('Promise consumed..')
});

const getUser = new Promise((resolve, reject) => {
    // Do some async task
    setTimeout(() => {
        let error = false;

        if (!error) {
            resolve({name: 'John', age: 30});
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000);
}).then((user) => console.log(user));

getUser
.then((user) => console.log(user))
.catch((error) => console.log(error))
.finally(() => console.log('Something went wrong'));

console.log('Hello from global scope');