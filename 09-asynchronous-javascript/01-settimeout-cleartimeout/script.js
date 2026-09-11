// setTimeout(function () {
//     console.log('Hello from callback');  // gets queued in call stack
// }, 0);

// console.log('Hello from global space');

setTimeout(changeText, 2000);

function changeText () {
    document.querySelector('h1').textContent = 'Hello from callback';
}

const timerId = setTimeout(changeText, 3000);

document.querySelector('#cancel').addEventListener('click', () => {
    console.log(timerId);
    clearTimeout(timerId);
    console.log('Timer cancelled');
})