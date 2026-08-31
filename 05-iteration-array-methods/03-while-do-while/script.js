 // while loop

 let i = 0;  // initialize the variable outside the loop
 while (i <= 20) {
    console.log('Number ' + i);
    i++;
 }


 // Loop over arrays
i = 0;
const arr = [10, 20, 30, 40, 50];

 while (i < arr.length) {
    console.log(arr[i]);
    i++;
 }


 // Nesting while loops
i = 1;

 while (i <= 10) {
       console.log('Number ' + i);

    let j = 1;
    while (j <= 10) {
        console.log(`${i} * ${j} = ${i * j}`);
        j++;
    }
    i++;
 }

 // Do Loop

 i = 21;
 do {                              // do loop always runs once even if condition is false
    console.log('Number ' + i);    // returns Number 21
    i++;
 } while (i <20);                  // condition is checked at last

