// 
let output;

const parent = document.querySelector('.parent');

output = parent.childNodes;         // gives a nodeList

// A nodeList is a collection of items inside an element

output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].innerHTML;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerHTML = 'Child Three Update';

// First and Last Child

output = parent.firstChild;

output = parent.lastChild;

parent.lastChild.textContent = 'Hello Update';

console.log(output);

// Parent node

const child = document.querySelector('.child');

output = child.parentNode;

output = child.parentElement;

console.log(output);


// Siblings 

const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem.nextSibling;

console.log(output);
