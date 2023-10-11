// WRITE YOUR CODE IN HERE:

let i = 0;
const d = document.querySelector('div')

while (i < 100) {
    i++
    const btn = document.createElement('button');
    btn.innerText = `btn ${i}!`
    d.appendChild(btn)
}
