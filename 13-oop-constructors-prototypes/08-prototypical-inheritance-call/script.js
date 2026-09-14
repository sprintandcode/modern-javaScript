function Shape(name) {
    this.name = name;
}

Shape.prototype.logName = function () {
    console.log(`Shape name: ${this.name}`);
}

// Inherit shape prototype
Rectangle.prototype = Object.create(Shape.prototype);

Circle.prototype = Object.create(Shape.prototype);


function Rectangle(name, height, width) {
    // inhereting the shape constructor
    Shape.call(this, name);           // call allows to pass in this to the context of the object 
    this.width = width;
    this.height = height;
}

function Circle(name, radius) {
    // inhereting the shape constructor
    Shape.call(this, name);          
    this.radius = radius;
}


// Shape prototype constructors

Rectangle.prototype.constructor = Rectangle;
Circle.prototype.constructor = Circle;


const rect = new Rectangle('Rectangle1', 20, 20);
console.log(rect);

const circle = new Circle('Circle1', 10);
console.log(circle);

rect.logName();
circle.logName();