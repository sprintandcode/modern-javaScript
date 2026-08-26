  let x = 5;

  x = 5 + '5';
  console.log(x, typeof x);

  x = 5 + Number('5');
  console.log(x, typeof x);

  x = 5 + null;
  console.log(x, typeof x);

  x = Number(null);
  console.log(x, typeof x);

  x = Number(true);            // change the value true (1) to number
  console.log(x, typeof x);

  x = Number(false);           // change the value false (0) to number
  console.log(x, typeof x);
  
  x = x + true;                // add x (0) to true (1) 
  console.log(x, typeof x);

  x = x + false;               // add x (1) to false (0)
  console.log(x, typeof x);

  x = x + undefined;
  console.log(x, typeof x);