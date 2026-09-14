// Creating a new prototype using object create.

const rectanglePrototypes = {
    area: function () {
        return this.width * this.height;
    },
    perimeter: function () {
        return 2 * (this.width * this.height);
    },
    square: function () {
        return this.width === this.height;
    }
}

function createRectangle (height, width) {
    return Object.create(rectanglePrototypes, {
        height: {
            value:height
        },
        width: {
            value: width
        },
    });
};

const rect = createRectangle(10, 20);
console.log(rect.square());
console.log(rect.area());
console.log(rect.perimeter());