const d = new Date(10, 30, 2022, 8, 0, 0);

const hour = d.getHours();

if (hour < 12) {
    console.log('Good Morning');
} else if (hour < 18) {
    console.log('Good Afternoon');
}else {
    console.log('Good Night');
}


// Nested if

if (hour < 12) {
    console.log('Good Morning');

    if (hour === 6){
        console.log('Wake up !');
    }
} else if (hour < 18) {

    console.log('Good Afternoon');

}else {
    console.log('Good Night');
    if (hour >= 20) {
        console.log('zzzzzz')
    }
}