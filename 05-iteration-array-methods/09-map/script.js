// mapping arrays
const numbers = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((number) => 'Number ' + number * 2);
console.log(doubledNumbers);

// same with for each

const doubledNumbers2 = [];
console.log(doubledNumbers2);
numbers.forEach((number) => {
doubledNumbers2.push(number * 2)
});

console.log(doubledNumbers2);



const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// create an array of companies name

const companyNames = companies.map((company) => company.name);
console.log(companyNames);

// create a new object that has just the company and category
companyObj = new Object();
const companyInfo = companies.map((company) => {
    return {
         name: company.name,
         category: company.category
        }});
console.log(companyInfo);

// create an array of objects with the name and the length of each company in years

const companyAge = companies.map((company) => {
    return {
    name: company.name,
    length: company.end - company.start,
}});
console.log(companyAge);

// Chain map method

const squareAndDouble = numbers
    .map((number) => Math.sqrt(number))
    .map((sqrt) => sqrt * 2);

console.log(squareAndDouble);


// Chain different methods

const evenNumbers = numbers
    .filter((number) => number % 2 === 0)
    .map((number) => number * 2);

console.log(evenNumbers);
