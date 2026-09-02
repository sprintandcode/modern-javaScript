// create elements in js 

const div = document.createElement('div');  // create a div
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

// innerText is usually used to get and change texts in existing elements
// div.innerText = 'Hello World'

const text = document.createTextNode('Hello World');
div.appendChild(text);

// document.body.appendChild(div);
document.querySelector('ul').appendChild(div); // add the div in ul at the bottom
