const playingTo = document.querySelector('#playing-to');
const p1 = document.querySelector('#p1-button');
const p2 = document.querySelector('#p2-button');
const reset = document.querySelector('#reset-button');
let p1scoreBoard = document.querySelector('#p1-score');
let p2scoreBoard = document.querySelector('#p2-score');

let playingValue = playingTo.value
let p1score = 0;
let p2score = 0;

playingTo.addEventListener('input', (e) => {
    console.log(e);
    playingValue = playingTo.value;
    console.log(playingValue)
    p1score = 0;
    p2score = 0;
    setScore(p1score, p2score);
    p2scoreBoard.style.color = 'black';
    p1scoreBoard.style.color = 'black';
    p1.disabled = false;
    p2.disabled = false;
})

p1.addEventListener('click', (e) => {
    p1score++;
    setScore(p1score, p2score);
    if (p1score == playingValue) {
        console.log(p1scoreBoard);
        p1scoreBoard.style.color = 'green';
        p2scoreBoard.style.color = 'red';
        p1.disabled = true;
        p2.disabled = true;
    }

})

p2.addEventListener('click', (e) => {
    p2score++;
    setScore(p1score, p2score);
    if (p2score == playingValue) {
        console.log(p1scoreBoard);
        p2scoreBoard.style.color = 'green';
        p1scoreBoard.style.color = 'red';
        p1.disabled = true;
        p2.disabled = true;
    }
})

reset.addEventListener('click', (e) => {
    p1score = 0;
    p2score = 0;
    setScore(p1score, p2score);
    p2scoreBoard.style.color = 'black';
    p1scoreBoard.style.color = 'black';
    p1.disabled = false;
    p2.disabled = false;
})


const setScore = (p1, p2) => {
    p1scoreBoard.innerText = `${p1}`;
    p2scoreBoard.innerText = `${p2}`;
}