'use strict'
/**class Figeure3D{
    constructor(name) {
        if (this.constructor === Figeure3D) {
            throw new Error ('you can not create instance of abstract class');
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Value must be string');
        }
        if (value.trim().length ===0) {
            throw new Error('Name must be a non-empty');
        }
        this._name = value;
    }
    getVolume() {
        throw new Error('method getVolume() must be implemented in next classes');
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

    getVolume() {
        return (
            (4 / 3) * Math.PI * Math.pow(this._radius, 3)
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
    getVolume(){
        return Math.pow(this._sideDimension, 3);
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
    
    getVolume(){
        return Math.PI * Math.pow(this._radius, 2) * this._height;
    }
}

const getVolume3DFigure = (figure) => {
    if (figure instanceof Figeure3D) {
        return figure.getVolume()
    }
    throw new TypeError('Argument must be an instance of Figeure3D');
};

const sphere = new Sphere(7);
const cube = new Cube(12);
const cylinder = new Cylinder(3, 5);

try {
    console.log(getVolume3DFigure(sphere));
    console.log(getVolume3DFigure(cube));
    console.log(getVolume3DFigure(cylinder)); 
} catch (error) {
    console.error(error);
}
*/




function checkType(value, type) {
    if (typeof value !== type) {
        throw new TypeError('Value must be a ' + type);
    }
}

function checkPositiveNumber(value) {
    if (value <= 0) {
        throw new RangeError('Value must be a positive number');
    }
}

class Figeure3D{
    constructor(name) {
        if (this.constructor === Figeure3D) {
            throw new Error ('you can not create instance of abstract class');
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        checkType(value, 'string');
        if (value.trim().length ===0) {
            throw new Error('Name must be a non-empty');
        }
        this._name = value;
    }
    getVolume() {
        throw new Error('method getVolume() must be implemented in next classes');
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
        checkType(value, 'number');
        checkPositiveNumber(value);
        this._radius= value;
    }

    getVolume() {
        return (
            (4 / 3) * Math.PI * Math.pow(this._radius, 3)
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
        checkType(value, 'number');
        checkPositiveNumber(value);
        this._sideDimension = value;
    }    
    getVolume(){
        return Math.pow(this._sideDimension, 3);
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
        checkType(value, 'number');
        checkPositiveNumber(value);
        this._radius = value;
    } 
    get height() {
        return this._height;
    }
    set height(value) {
        checkType(value, 'number');
        checkPositiveNumber(value);
        this._height = value;
    } 
    
    getVolume(){
        return Math.PI * Math.pow(this._radius, 2) * this._height;
    }
}

const getVolume3DFigure = (figure) => {
    if (figure instanceof Figeure3D) {
        return figure.getVolume()
    }
    throw new TypeError('Argument must be an instance of Figeure3D');
};

const sphere = new Sphere(7);
const cube = new Cube(12);
const cylinder = new Cylinder(3, 5);

try {
    console.log(getVolume3DFigure(sphere));
    console.log(getVolume3DFigure(cube));
    console.log(getVolume3DFigure(cylinder)); 
} catch (error) {
    console.error(error);
}
