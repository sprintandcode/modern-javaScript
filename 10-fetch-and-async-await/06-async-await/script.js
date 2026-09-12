const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'John', age: 20
        })
    })
})

// promise.then((data)) => console.log(data);

async function getPromise() {
    const response = await promise;  // await is used as it is async operation as the promise has to wait as it won't execute right away   
    console.log(response);
}

async function getUsers() {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data);
}

getPromise();
getUsers();

// using it with arrow functions

const getPosts = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const data = await res.json();

    console.log(data);
}

getPosts();