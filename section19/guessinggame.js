
let max = parseInt(prompt("Enter a Maximum Whole Number Greater Than 0"));

// while (!maximum)
while (typeof (max) !== "number" || isNaN(max) || max <= 0) {
    max = parseInt(prompt("That's not a positive integer. Enter a Maximum Number"));
}
const secret = Math.round((Math.random() * max));
// const secret = Math.floor(Math.random() * max) + 1;

let guess = parseInt(prompt("Guess the number I'm thinking of!"));
let count = 1;

while (parseInt(guess) !== secret) {
    if (guess === 'q') {
        break;
    }
    count++;
    if (guess < secret) {
        guess = (prompt("Too low. Guess again."));
    } else if (guess > secret) {
        guess = (prompt("Too high. Guess again."));
    } else {
        console.log(`You got it in ${count} attempts!`);
        break;
    }
};

console.log(secret)