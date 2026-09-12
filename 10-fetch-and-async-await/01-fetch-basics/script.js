// fetching from a json file
fetch('./movies.json')
    .then((response) => response.json())
    .then((data) => console.log(data));

// fetching from a text file
fetch('./test.txt')
    .then((response) => response.text())
    .then((data) => console.log(data));

// fetching from an API
fetch('https://api.github.com/users/sprintandcode')
    .then((response) => response.json())
    .then((data) => document.querySelector('h1').textContent = data.login);