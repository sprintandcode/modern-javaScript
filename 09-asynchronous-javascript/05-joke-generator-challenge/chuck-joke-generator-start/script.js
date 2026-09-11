const jokeEl = document.getElementById('joke');
const jokeButton = document.getElementById('joke-btn');

const getAnotherJoke = () => {
    const xhr = new XMLHttpRequest();


xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
        if (this.status === 200) {
            jokeEl.innerHTML = JSON.parse(this.responseText).value;
        } else {
            jokeEl.innerHTML = 'Something went wrong (Not Funny)';
        }
    }
}
    xhr.send();
};


jokeButton.addEventListener('click', getAnotherJoke);
document.addEventListener('DOMContentLoaded', getAnotherJoke);