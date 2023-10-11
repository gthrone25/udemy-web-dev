for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 0; i <= 20; i += 2) {
    console.log(i)
}

for (let i = 100; i >= 0; i -= 10) {
    console.log(i)
}

const animals = ["lion", "whale", "tucan"];

for (i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}

for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`);
    for (let j = 1; j < 4; j++) {
        console.log(`   j is: ${j}`);
    }
}


let count = 0;
while (count < 10) {
    console.log(count)
    count++;
}

const SECRET = "BabyHippo";

let guess = prompt("Enter the secret code... type BabyHippo to end");
while (guess !== SECRET) {
    guess = prompt("Enter the secret code... type BabyHippo to end");
}
console.log("You got it!");

for (let i of animals) {
    console.log(i, animals[i]);
}

const scores = { greg: 90, annie: 91, mia: 92 }

for (let entry in scores) {
    console.log(`iterating using in method and key ${entry}`)
}

for (let entry of Object.entries(scores)) {
    console.log(`iterating using of method and entries ${entry}`)
}