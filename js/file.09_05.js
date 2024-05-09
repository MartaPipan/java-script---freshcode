//ABSTRACT CLASS
class figura{
    constructor(name) {
        this._name = name;
    }
    getName() {
        return this_name;
    }
    getArea() {
        throw new Error('method abstract class');
    }
    getPerimeter() {
        throw new Error('method abstract class');
    }
}
class Triangular extends Figura{
    constructor(sideA, sideB, sideC, angleAB) {
        super('Triangular');
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        this.angleAB = angleAB;
    }
    get sideA(){
        return this_sideA;
    }
    get sideB(){
        return this_sideB;
    }
    get sideC(){
        return this_sideC;
    }
    get angleAB(){
        return this_angleAB;
    }
    getArea() {
        return (
            (this.sideA * this.sideB * Math.sin(this.angleAB * (180 / Math.PI))) / 2
        );
    }
}

class Circle extends Figura{
    constructor(radius) {
        super('Circle');
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    getArea(){
        return this.radius ** 2 * Math.PI;
    }
}
    
    
const triangular1 = new Triangular(3, 4, 45);
console.log(triangular1.getArea());

const circle1 = new Circle(10);
console.log(circle1.getArea());

console.log(triangular1.name);
const getAreaFigure = (figure) => {
    figure.getArea()
    if (figure instanceof Figura) {
        return figure.getArea()
    }
    throw new TypeError('must be figure')
 }


