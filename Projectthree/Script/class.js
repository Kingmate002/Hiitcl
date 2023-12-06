class Rectangle {
    constructor(length, breadth, height) {
        this.length = length
        this.breadth = breadth
        this.height = height
    }

    area() {
        return this.lenght * this.breadth
    }

    perimeter() {
        return 2 * (this.length + this.breadth)
    }

    volume() {
        return this.lenght * this.breadth * this.height
    }

    // async randomcal(){
    //     const area = this.area
    //     const perimeter = this.perimeter
    //     return await (area * perimeter)
    // }

    static squaredSides(length, breadth) {
        return (length ** 2) + _(breadth ** 2)
    }
}


const rectangleVal = new Rectangle(10, 15, 20)
// const rectangleVal2 = new Rectangle(10, 5)
// console.log(rectangleVal12.area)

console.log(rectangleVal.area())
console.log(rectangleVal.perimetre())
console.log(rectangleVa.volume())
console.log(rectangleVal.randomCal())
console.log(new Rectangle(1, 2, 4).volume())
console.log(rectangle.squaredsides(10, 5))