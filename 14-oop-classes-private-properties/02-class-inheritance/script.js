// Parent Class

class Shape {
    constructor (name) {
        this.name = name;
    }

    logName () {
        console.log(this.name);
    }
}


// sub class
class Rectangle extends Shape {
    constructor (name, width, height) {
        super(name);

        this.width = width;
        this.height = height;
    }
}

class Circle extends Shape {
    constructor (name, radius) {
        super(name);

        this.radius = radius;
    }
}

const rect = new Rectangle('Rectangle1', 20, 10);
console.log(rect);

rect.logName();

const circle = new Circle('Circle1', 12);
console.log(circle);
circle.logName();