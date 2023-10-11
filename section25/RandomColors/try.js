
const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

const makeRandColor = () => {
    let red = (Math.floor(Math.random() * 255) + 1);
    let green = (Math.floor(Math.random() * 255) + 1);
    let blue = (Math.floor(Math.random() * 255) + 1);
    return `rgb(${red},${green},${blue})`;
}

// const displayColor(r, g, b) => {
//     return `rgb(${r},${g},${b})`;
// }

btn.addEventListener('click', () => {
    newcol = makeRandColor();
    console.log(newcol)
    document.querySelector('body').style.backgroundColor = newcol;
    h1.innerText = newcol
})

