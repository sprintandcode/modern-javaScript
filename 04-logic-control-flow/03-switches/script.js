const d = new Date(2026, 8, 25, 10, 0, 0);

const month = d.getMonth();

console.log(month);

switch (month) {
    case 1:
        console.log('It is January');
        break;

    case 8:
        console.log('It is August');
        break;

    default:
        console.log('IT is not January and August');
}