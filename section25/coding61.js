const form = document.querySelector('form');
const product = document.querySelector('#product');
const quant = document.querySelector('#qty');
const list = document.querySelector('#list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    log(product.value, quant.value);
    product.value = '';
    qty.value = '';
})

const log = (prod, qty) => {
    let bullet = document.createElement('li');
    bullet.innerText = `${qty} ${prod}`;
    // bullet.appendChild(document.createTextNode(`${qty} ${prod}`));
    list.appendChild(bullet);
}