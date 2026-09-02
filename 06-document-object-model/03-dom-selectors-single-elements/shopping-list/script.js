// document.getElementById()

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);

// get-attribute
console.log(document.getElementById('app-title').getAttribute('id'));

// set-attribute

document.getElementById('app-title').title = 'Shopping-list';

document.getElementById('app-title').setAttribute('class', 'title');

const text = document.getElementById('app-title');


// Get/change content

console.log(text.textContent);
text.textContent = 'Hello World';
text.innerText = 'Hello World Again';
text.innerHTML = '<strong>Shopping List</strong>'

// Change Styles

text.style.color = 'red';
text.style.background = 'beige';
text.style.padding = '10px';
text.style.borderRadius = '8px';

// document.querySelector()

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));

// access the pseudo-selector
console.log(document.querySelector('li:nth-child(2)'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'Purple';

// Use these methods on other elements
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';