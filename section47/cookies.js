const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser('thisismysecret'))

app.get('/greet', (req, res) => {
    console.log(req.cookies)
    const { name = 'No Name' } = req.cookies;
    res.send(`Hey There, ${name}`);
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'henrietta')
    res.cookie('animal', 'harlequin shrimp')
    res.send('Ok sent you a cookie');
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.send('Ok signed your fruit cookie');
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies)
    res.send(req.signedCookies);
})

app.listen(3000, () => {
    console.log('Serving ap on localhost:3000')
})