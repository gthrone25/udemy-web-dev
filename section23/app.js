const rollDie = (numSides = 6) => {
    return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDie(20))

console.log(rollDie())

function greet(msg, person = 'greg', punc = '!') {
    console.log(`${msg}, ${person}${punc}`)
}

greet('hi', 'Annie')

const nums = [1, 2, 3, 4, 6, 4, 3, 45, 5]

console.log(Math.max(...nums))

const small = [1, 2, 3]
const med = [4, 5, 6]
const large = [...med, ...small]
console.log(large)

// function sum() {
//     return arguments.reduce((totoal,etl) => total + el)
// }

function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}

console.log(sum(1, 34, 64, 4, 4))

function raceResults(gold, silver, ...therest) {
    console.log(`Gold medal goes to: ${gold}`)
    console.log(`Silver medal goes to: ${silver}`)
    console.log(`And thanks to everyone else: ${therest}`)
}

raceResults('greg', 'annie', 'bruce', 'ari')

const [gold, silver] = nums;
console.log(gold, silver)