const x = 100;

console.log(x, 'in global');

function testScope () {
    console.log(x, 'in block');
}

testScope();

function add() {
    const y = 50;
    const x = 45;    // overshadows the global scope value of x
    console.log(x + y);
}

add();

//console.log(y);         // will give an error saying 'y is not defined'