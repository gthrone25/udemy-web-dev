console.log("HELLO FROM OUR FIRST JS FILE!!!!")
let total = 1 + 3

console.log("Before Conditional")
let rand = Math.random()
if (rand < 0.5) {
    console.log("You number is less than 0.5")
    console.log(rand)
}

if (rand >= 0.5) {
    console.log("You number is greater than 0.5")
    console.log(rand)
}
console.log("After Conditional")
console.log("Goodbye")

const dayOfWeek = prompt('Enter a day').toLowerCase();

if (dayOfWeek == 'monday') {
    console.log("UGHH I hate mondays")
} else if (dayOfWeek == 'saturday') {
    console.log('Woohoo! I love Saturdays!')
} else {
    console.log("just another day")
}


const password = prompt('Enter a new password');

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('password is valid')
    } else {
        console.log('password cannot contain spaces')
    }
    console.log("Password is long enough")
} else {
    console.log("Password is not long enough! Must be 6+ characters")
}

if (password.length >= 6 && (password.indexOf(' ') === -1)) {
    console.log('password is valid')
} else {
    console.log("Password is not long enough or has spaces")
}

const age = 10;

if (age >= 0 && age < 5 || age >= 65) {
    console.log("FREE")
} else if (age <= 5 && age < 10) {
    console.log("10")
} else if (age <= 10 && age < 65) {
    console.log("20")
} else {
    console.log("INVALID")
}

const firstName = prompt("Enter your first name");

if (!firstName) {
    firstName = prompt("TRY AGAIN")
}

// const day = 2;
// if (day === 1) {
//     console.log("MONDAY")
// } else if (day === 2) {
//     console.log("TUESDAY")
// } else if (day === 2) {
//     console.log("WEDNESDAY")
// } else if (day === 2) {
//     console.log("THURSDAY")
// } else if (day === 2) {
//     console.log("FRIDAY")
// } else {
//     console.log("Lazy")
// }

const day = 6;
switch (day) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:

        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
    case 7:
        console.log("Lazy");
}