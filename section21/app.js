function collectEggs() {
    let totalEggs = 6;
}

collectEggs()
//  Does not work dueto scope console.log(totalEggs)

function callTwice(func) {
    func();
    func();
}

function callTentTimes(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

callTwice(rollDie)
callTentTimes(rollDie)

function makeMysterFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log('Congrats, I am a good function!')
        }
    } else {
        return function () {
            alert('You have been infected by a bad comp!')
        }
    }
}

let testfunc = makeMysterFunc();
console.log(testfunc)

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

// function isBetween(num) {
//     return num >= 50 && num <= 100;
// }

const yadult = makeBetweenFunc(0, 18)
console.log(yadult)
console.log(yadult(16))
console.log(yadult(25))

const myMath = {
    PI: 3.12,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    },
    quad(num) {
        return num ** 4;
    }
}

console.log(myMath.cube(4))
console.log(myMath.quad(4))

const cat = {
    name: 'Blue Steele',
    color: 'greg',
    breeed: 'scottif fold',
    meow() {
        console.log(this) // This is referring to cat object
        console.log(`${this.name} says Meow`)
    }
}

const meow2 = cat.meow; //this is referring to window object
console.log(meow2);

try {
    hello.toUpperCase();
} catch (e) {
    console.log(e)
};

console.log('still running')