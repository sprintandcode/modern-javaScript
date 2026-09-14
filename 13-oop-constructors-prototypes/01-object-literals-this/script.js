const rectangle = {
    name: 'Reactangle1', 
    width: 10,
    height: 10,
    area: function () {
        return this.width * this.height;
    }
};

const reactangle2 = {
    name: 'Reactangle2', 
    width: 20,
    height: 30,
    area: function () {
        return this.width * this.height;
    }
}

console.log(reactangle2.area());