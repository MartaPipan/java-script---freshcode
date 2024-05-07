
class Squirrel {
    /**
     * @param{string} name;
     * @param{string}color;
      */
    // #name;
    // #color;

    // const COLOR = ['red', 'gray', 'rainbow'];

    constructor(name, color) {
        this._name = name;
        this._color = color;
    }
    
    get name() {
        this._name;
    }
    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Value most be a string');
        }
        if (value.langth < 3) {
            throw new RangeError('Name must be at last 3 characters long');
        }
        this._name = value;
    }
    get color() {
        this._color;
    }
    set color(value) {
        const COLORS = ['red', 'gray', 'rainbow']
        if (typeof value !== 'string') {
            throw new TypeError('Value most be string');
        }
        if (COLORS.includes(value) === false) {
            throw new RangeError('Color does not exist');
        }
        this._color = value;
    }
    jump() {
        return `${this._name} jumping`;
    }
}


try {
    const squirrel1 = new Squirrel('Maggi', 'rainbow');
    console.log(squirrel1.jump());
} catch (error) {
    console.error(error);
}
    
class FlySquirrel extends Squirrel{
    /**
     * @param{string}name;
     * @param{string}color;
     * @param{number}maxFlyLength;
     */
    //#maxFlyLength;

    constructor(name, color, maxFlyLength) {
        super(name, color);
        this._maxFlyLength = maxFlyLength;
    }
   
    get maxFlyLength() {
        this._maxFlyLenght;
    }
    set  maxFlyLength(value) {
        if (typeof value !== 'number' && value < 0) {
            throw new TypeError('Value most be positive number');
        }
        if (value > 0 && value <= 50) {
            throw new RangeError('Max fly length must be greater than 50');
        }
        this._maxFlyLength = value;
    }

     jump() {
        return`${this._name} jumping`;
    }
    fly() {
        return `${this._name} flying at max  ${this._maxFlyLength} length`;
    }
}
try {
    const squirrel2 = new FlySquirrel('Kaila', 'gray', 57);
    console.log(squirrel2.jump()+' and '+squirrel2.fly());
} catch (error) {
    console.error(error);
    }

class MagicSquirrel extends FlySquirrel{
    /**
     * @param{string}name;
     * @param{string}color;
     * @param{number}maxFlyLength;
     * @param{string}words;
     */
    //#words;
    //const WORDS = ['I', 'am', 'a', 'magic', 'squirrel'];
    constructor(name, color, maxFlyLength, words) {
        super(name, color, maxFlyLength);
        this._words = words;
    }
    get words() {
        this._words;
    }
    set words(value) {
        const WORDS = ['I', 'am', 'a', 'magic', 'squirrel'];
        if (typeof value !== 'string') {
            throw new TypeError('Value most be a string');
        }
         if (WORDS !== Array.isArray && WORDS.incluides(value) === false) {
            throw new RangeError('Words does not exists');
        }
        this._words = value;
    }
    jump() {
        return`${this._name} jumping`;
    }
    fly() {
        return `${this._name} flying at max ${this._maxFlyLength} length`;
    }
    say() {
        return 'I am a magic squirrel'
    }

}
try {
    const squirrel3 = new MagicSquirrel('Banckly', 'gray', 73);
    console.log(squirrel3.jump()+', '+squirrel3.fly()+' and say: '+squirrel3.say()+'!');
} catch (error) {
    console.error(error);
    }