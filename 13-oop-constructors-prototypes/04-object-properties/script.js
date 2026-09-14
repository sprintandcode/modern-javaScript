function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

 const rect1 = new Rectangle('Rectangle1', 20, 10);
 const rect2 = new Rectangle('Rectangle2', 10, 10);

 console.log(rect1.name, rect2.width);
 console.log(rect1['width']);

 // Adding a new property

 rect1.color = 'red';
 rect2.perimeter = () => 2 * (rect2.width + rect2.height);

 // deleting a property
 delete rect2.perimeter;
 console.log(rect2);

 // Checking for a property
console.log(rect1.hasOwnProperty('color'));
 console.log(rect2.hasOwnProperty('color'));

 // Get Keys
 console.log(Object.keys(rect1));
 console.log(Object.values(rect2));

 // Get Entries
 console.log(Object.entries(rect1));

 for (let [key, value] of Object.entries(rect1)) {
  if (typeof(value) != 'function') {
    console.log(`${key} - ${value}`);
  }
 }