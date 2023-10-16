String.prototype.yell = function () {
    return `OMG!! ${this.toUpperCase()}!!! aRGHGHGH`;
};

Array.prototype.pop = function () {
    return 'Sorry I want that elelment, I will never pop it off';
};

console.log([1, 2, 3].pop())

function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
    return `rgb(${r},${g},${b})`;
};

function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r},${g},${b})`;
    };
    color.hex = function () {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

    }
    return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.hex();

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    console.log(this);
}

Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
};

Color.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

};

Color.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r},${g},${b},${a})`;
}

new Color(255, 40, 100);

const color1 = new Color(40, 255, 60);
const color2 = new Color(0, 0, 0);

console.log(color1.hex === color2.hex);

// document.body.style.backgroundColor = color1.rgb()
// document.body.style.backgroundColor = color1.rgba(0.7)

class Color2 {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL();
        console.log('INSIDE CONSTRUCTOR');
        console.log(r, g, b);

    }
    greet() {
        return `HELLO from a ${this.name}`
    }
    innerRGB() {
        const { r, g, b } = this;
        return `${r},${g},${b}`;
    }
    rgb() {

        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()},${a})`;
    }
    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    hsl() {
        const { h, s, l } = this;
        return `hsl(${h},${s}%, ${l}%)`;
    }
    fulllySaturated() {
        const { h, l } = this;
        return `hsl(${h},100%, ${l}%)`;
    }
    opposite() {
        const { h, s, l } = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue},${s}%, ${l}%)`;
    }
    calcHSL() {
        let { r, g, b } = this;
        // Make r, g, and b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;

        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        if (delta == 0) h = 0;
        else if (cmax == r)
            // Red is max
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            // Green is max
            h = (b - r) / delta + 2;
        else
            // Blue is max
            h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        // Make negative hues positive behind 360°
        if (h < 0) h += 360;
        // Calculate lightness
        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        this.h = h;
        this.s = s;
        this.l = l;
    }
}

const c1 = new Color2(255, 67, 89, 'tomato')
const c2 = new Color2(255, 255, 255, 'white')

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}


class Cat extends Pet {
    // constructor(name, age) {
    //     this.name = name;
    //     this.age = age;
    // }
    // eat() {
    //     return `${this.name} is eating!`;
    // }
    constructor(name, age, livesLeft = 9) {
        console.log('in cat constructor')
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'Meow';
    }
}

const kitty = new Cat('monty', 9)

class Dog extends Pet {
    // constructor(name, age) {
    //     this.name = name;
    //     this.age = age;
    // }
    // eat() {
    //     return `${this.name} is eating!`;
    // }
    woof() {
        return 'Woof';
    }
}

const doggy = new Dog('wyatt', 13)