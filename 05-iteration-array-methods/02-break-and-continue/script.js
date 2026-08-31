// Break -- out of the loop (after checking a certain condition)

for (let i = 0; i <= 20; i++) {
    if( i === 15) {                  // breaks the loop after 15th iteration
        console.log('Breaking ...');
        break;
    }
    console.log(i);
}


// Continue -- skip a certain condition when met

// Break -- out of the loop (after checking a certain condition)

for (let i = 0; i <= 20; i++) {
    if( i === 15) {                       // skips the 15th iteration
        console.log('Skippping ...');
        continue;
    }
    console.log(i);
}
