function sing() {
    console.log('DO');
    console.log('RE');
    console.log('MI');
}

sing()
sing()

function greet(firstName) {
    console.log(`HI, ${firstName}`);
}

greet('greg')
greet('annie')

function greet2(firstName, lastName) {
    console.log(`HI, ${firstName} ${lastName[0]}.`);
}

greet2('greg', 'throne')
greet2('annie', 'ortman')

function repeat(str, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
    }
    console.log(result);
}

repeat('I love chickens', 3)

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false
    }
    return x + y;
    console.log('this will not run!!!')
}

sum = add(9, 4);
console.log(sum)
bad = add('a', 4);
console.log(bad)



function lastElement(arrayarg) {
    if (arrayarg.length === 0) {
        return null;
    } else {
        return arrayarg[-1];
    }
}

console.log(lastElement([3, 5, 7]))
console.log([3, 5, 7][0])