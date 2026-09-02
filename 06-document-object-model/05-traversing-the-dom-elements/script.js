// Get Child Elements

let output;

const parent = document.querySelector('.parent');

output = parent.children;
output = parent.children[1];

output = parent.children[1].innerText;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two';  
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Third';

// Get Parent Elements from Child

const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = '1px solid';
child.parentElement.style.padding = '10px';

// Sibling elements

// select next sibling

const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem.nextElementSibling;               

secondItem.nextElementSibling.style.color = 'green';

// select previous sibling

secondItem.previousElementSibling.style.color = 'blue';

console.log(output);


