// Challenge 1

// using function declaration
function getCelsius(f) {
    let c = (f - 32)/ (9/5);
    console.log(c);
}

getCelsius(98.6);

// using arrow function

const getCelsiusDegree = (f) => console.log((f - 32)/ (9/5));

getCelsiusDegree(32);


// Challenge 2
let min, max;
const getMinMax = (numbers) => {
    min = Math.min(...numbers);
    max = Math.max(...numbers);
    
    return {
        min, 
        max,
    }
}

console.log(getMinMax([1, 2, 3, 4, 5]));

// Challenge
