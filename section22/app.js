const numbers = [1, 2, 3, 4, 5];

function print(element) {
    console.log(element);
}
numbers.forEach(print)

numbers.forEach(function (el) {
    console.log(el)
})

for (let el of numbers) {
    console.log(el)
}

//  all the above do the same thing

doubles = numbers.map(function (num) {
    return num * 2;
})

console.log(doubles)

const add = (x, y) => {
    return x + y;
}

const square = x => {
    return x ** 2;
}

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

const rollDie2 = () => (
    Math.floor(Math.random() * 6) + 1
)

const add2 = (a, b) => a + b

console.log('Hello??')
setTimeout(() => {
    console.log('... Are you still there?')
}, 3000)

console.log('goodbye!')

// setInterval(() => {
//     console.log(Math.random())
// }, 2000)

filtnum = numbers.filter(n => {
    return n === 4
})

console.log(filtnum)

everypos = numbers.every(score => score > 0)
console.log(everypos)

somepos = numbers.some(score => score > 3)
console.log(somepos)

const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

let redvar = prices.reduce((total, price) => {
    return total + price
})

console.log(redvar)

let minvar = prices.reduce((min, price) => {
    if (price < min) {
        return price
    } else {
        return min
    }
})

console.log(minvar)

let startvar = prices.reduce((total, price) => {
    return total + price
}, 50)

console.log(startvar)

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: () => {
        console.log(this)
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(function () {
            console.log(this.fullName())
        })
    }
}

person.shoutName()