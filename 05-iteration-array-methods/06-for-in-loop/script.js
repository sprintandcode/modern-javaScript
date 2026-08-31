const colourObj = {
    color1: 'red', 
    color2: 'pink',
    color3: 'blue',
    color4: 'violet'
} 

// Loop throgh objects
for (const key in colourObj) {
    console.log(key, colourObj[key]);
}

const colorArr = ['red', 'pink', 'blue', 'violet']

for (const key in colorArr) {
    console.log(colorArr[key]);
}