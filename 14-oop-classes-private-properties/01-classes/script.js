// function Rectangle(height, width) {
//   this.height = height;
//   this.width = width;
// }

// Rectangle.prototype.area = function () {
//   return this.height * this.width;
// };

// Rectangle.prototype.perimeter = function () {
//   return 2 * (this.height + this.width);
// };

// Rectangle.prototype.isSquare = function () {
//   return this.height === this.width;
// };

// Rectangle.prototype.logArea = function () {
//   console.log('Rectangle Area: ' + this.area());
// };


class Rectangle {
  constructor (name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    return this.height * this.width;
  }

  perimeter() {
    return 2 * (this.height * this.width);
  }

  isSquare() {
    return this.height === this.width;
  }

  logArea() {
    console.log('Rectangle Area:' + this.area())
  }
}

const square = new Rectangle('Square', 5, 5);
console.log(square);
console.log(square.area());
console.log(Object.getPrototypeOf(square));
square.logArea();
console.log(square.isSquare());
console.log(square.perimeter());
