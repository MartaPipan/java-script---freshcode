// успадкування
// інкапсуляція
// абстракція
// поліморфізм
//abstract class - template
class Figura {
  constructor(name) {
    if (this.constructor === Figura) {
      throw new Error('You can\'t create instance of abstract class');
    }
    this._name = name;
  }
  get name() {
    return this._name;
  }
  getArea() {
    throw new Error('Abstract method must be implemented');
  }
  getPerimeter() {
    throw new Error('Abstract method must be implemented');
  }
  static isFigure(value) {
    return value instanceof Figura;
  }
}

class Triangular extends Figura {
    constructor(sideA, sideB, sideC, angleAB) {
        super('Triangular');
        this._sideA = sideA;
        this._sideB = sideB;
        this._sideC = sideC;
        this._angleAB = angleAB;
    }
    get sideA() {
        return this._sideA;
    }
    get sideB() {
        return this._sideB;
    }
    get sideC() {
        return this._sideC;
    }
    get angleAB() {
        return this._angleAB;
    }
    getArea() {
        return (
            (this.sideA * this.sideB * Math.sin(this.angleAB * (Math.PI / 180))) / 2
        );
    }
}

class Circle extends Figura {
    constructor(radius) {
        super('Circle');
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    getArea() {
        return this.radius ** 2 * Math.PI;
    }
}

class Square extends Figura {
    constructor(side) {
        super('Square');
        this._side = side;
    }
    get side() {
        return this._side;
    }
    getPerimeter() {
        return this._side * 4;
    }
    getArea() {
        return this.side ** 2;
    }
    set side(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Value must be a number');
        }
        if (value <= 0) {
            throw new RangeError('Value must be a positive number');
        }
        this._side = value;
    }
}

const square1 = new Square(5);
console.log(square1.getArea());

const triangular1 = new Triangular(3, 4, 5, 45);
console.log(triangular1.getArea());

const circle1 = new Circle(10);
console.log(circle1.getArea());

console.log(triangular1.name);

try {
  const square1 = new Square(7);
  console.log(square1.getArea);
} catch (error) {
  console.error(error);
} 

const getAreaFigure2 = (figure) => {
  if (Figura.isFigure(figure)) {
    return figure.getArea();
  }
  throw new TypeError('Must be a Figura');
};
try {
  console.log(getAreaFigure2(triangular1));
  console.log(getAreaFigure2(circle1));
  console.log(getAreaFigure2(square1));
} catch (error) {
  console.error(error);
}







class Figeure3D{
    constructor(name) {
        if (this.constructor === Figeure3D) {
            throw new Error ('you can not create instance of abstract class');
        }
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Value must be a string');
        }
        if (value.length ===0) {
            throw new Error('Name must be a non-empty');
        }
    }
    getArea() {
        throw new Error('method getArea() must be implemented in next classes');
    }
}
class Sphere extends Figeure3D{
    constructor(radius) {
        super('Sphere');
        this.radius = radius
    }
    get radius(){
        return this._radius;
    }
    set radius(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Value must be number');
        }
        if (value <= 0) {
            throw new RangeError('Value must be positive number');
        }
        this._radius= value;
    }

    getArea() {
        return (
            (4 / 3) * Math.PI * Math.pow(this.radius, 3)
        );
    }
}

class Cube extends Figeure3D{
    constructor(sideDimension) {
        super('Cube');
        this.sideDimension = sideDimension;
    }
    get sideDimension() {
        return this._sideDimension;
    }
    set sideDimension(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Value must be number');
        }
        if (value <= 0) {
            throw new RangeError('Value must be positive number');
        }
        this._sideDimension = value;
    }    
    getArea(){
        return Math.pow(this.sideDimension, 3);
    }
}
class Cylinder extends Figeure3D{
    constructor(radius, height) {
        super('Cylinder');
        this.radius = radius;
        this.height = height;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Value must be number');
        }
        if (value <= 0) {
            throw new RangeError('Value must be positive number');
        }
        this._radius = value;
    } 
    get height() {
        return this._height;
    }
    set height(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Value must be number');
        }
        if (value <= 0) {
            throw new RangeError('Value must be positive number');
        }
        this._height = value;
    } 
    
    getArea(){
        return Math.PI * Math.pow(this.radius, 2) * this.height;
    }
}

const getAreaFigeure3D = (figure) => {
    figure.getArea()
    if (figure instanceof Figeure3D) {
        return figure.getArea()
    }
    throw new TypeError('Argument must be an instance of Figeure3D');
};

const sphere = new Sphere(7);
const cube = new Cube(12);
const cylinder = new Cylinder(3, 5);

try {
    console.log(getAreaFigeure3D(sphere));
    console.log(getAreaFigeure3D(cube));
    console.log(getAreaFigeure3D(cylinder)); 
} catch (error) {
    console.error(error);
}










