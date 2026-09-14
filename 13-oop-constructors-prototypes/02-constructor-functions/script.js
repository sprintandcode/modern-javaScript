function Rectangle(name, width, height) { 
    this.name = name;
    this.width = width;
    this.height = height;

    this.area = function () {
        return this.height * this.width;
    }
}

// What happens when we call the new ?
/**
 *  - A new empty object is created.
 *  - A constructor function is called with the arguments that are passed in.
 *  - The 'this' keyword is set to new empty object.
 *  - The new object is returned from construction function i.e. this. 
 */
const  rect1 = new Rectangle('Rectangle1', 10, 15);

console.log(rect1.area());

const  rect2 = new Rectangle('Rectangle2', 30, 15);
console.log(rect2.name);
console.log(rect2.area());

const  rect3 = new Rectangle('Rectangle3', 20, 15);
console.log(rect3.name);
console.log(rect3.area());


// If we want to get the constructor of an object
console.log(rect1.constructor);

// If we want to check for instance
console.log(rect1 instanceof Rectangle);
