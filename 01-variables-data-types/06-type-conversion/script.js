let ammount = "100";

// ways to change String to Number
ammount = parseInt(ammount);
ammount = +ammount;
ammount = Number(ammount);

console.log(ammount, typeof ammount);

//ways to change  String to decimal

let decNum = '99.5';
decNum = parseFloat(decNum);

console.log(decNum, typeof decNum);

// ways to change Number to String

let num = 100;
num = num.toString();
num = String(num);

console.log(num, typeof num);


/* Not a Number (NaN)
   ways to end up with a NaN in JavaScript: 
    - when number cannot be parsed.
    - when the number in operation is not real.
    - when the operand on a number is a NaN itself.
    - when operation involves the case of undefined.
    - when a string value is operated upon.
*/


