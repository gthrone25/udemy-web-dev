const head = document.querySelector('h1');
const inp = document.querySelector('#username');

inp.addEventListener('input', (e) => {
    if (inp.value === '') {
        head.innerText = `Enter Your Username`;
    } else {
        head.innerText = `Welcome, ${inp.value}`;
    }
})