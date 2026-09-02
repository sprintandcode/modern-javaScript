// DOM visualization

console.log(window)

console.dir(document);

console.dir(document.body);

console.dir(document.body.innerHTML);

console.dir(document.body.innerText);

// access all the links

console.dir(document.links[0]);

// document is not read-only. We can write to it and change it.

// document.body.innerHTML = '<h1>Hello World !</h1>'

document.write('Hello from JS');

// Methods to select certain documents from the DOM.

console.log(document.getElementById('main'));

const main = document.getElementById('main');
main.innerHTML = '<h1>Hello World !</h1>';

document.querySelector('#main h1').innerText = 'Hello';
