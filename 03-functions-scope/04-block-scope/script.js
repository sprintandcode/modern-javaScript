const x = 100;      // doesn't gets assigned to the window object

var add = 2;        // gets assigned to the window object

if (true) {
    const y = 200;
    console.log(x+y);
}

//console.log(x + y);

for (i=0; i<10; i++) {
    console.log(i);
}

if (true) {
    const a = 500;      // const and let are block scoped
    let b = 600;
    var c = 700;        // Var is not blocked scoped
}

console.log(c)          // will log 700

function run () {
    var d = 100;
    console.log(d);
}

run();

console.log(d);         // var is function scoped so will return error