const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((initialValue, number) => initialValue + number);

console.log(sum);


const products = [
  { name: 'Product One', id: 1, price: 1981},
  { name: 'Product Two', id: 2, price: 1992},
  { name: 'Product Three', id: 3, price: 1999},
  { name: 'Product Four', id: 4, price: 1989},
  { name: 'Product Five', id: 5, price: 2009},
];

// get the total of these prices

const totalPrice = products.reduce((acc, product) => {
    return acc + product.price;
}, 0 )

console.log(totalPrice);