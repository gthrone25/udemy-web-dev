const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));
// app.use(morgan('dev'));
// app.use(morgan('common'));

app.use((req, res, next) => {
    // req.method = 'GET';
    req.requestTime = Date.now();
    console.log(req.method.toUpperCase());

    next();
})

app.use('/dogs', (req, res, next) => {
    console.log('I love Dogs');
    next();
})

// http://localhost:3000/dogs/?password=checkennugget

const verifyPassword = ((req, res, next) => {
    const { password } = req.query;
    if (password === 'checkennugget') {
        next();
    }
    res.send('sorry you need a password')
});

app.use((req, res, next) => {
    console.log('Hijack! First middleware');
    next();
    console.log('This is run after next() in first middleware')
});

app.use((req, res, next) => {
    console.log('Hijack! Second middleware');
    next();
});

app.get('/', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`);
    res.send('Home Page')
})

app.get('/dogs', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`);
    res.send('Woof Woof')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send(`Sometimes I let toots out in public`);
})

app.use((req, res) => {
    res.status(404).send('Not Found')
})

app.listen(3000, () => {
    console.log("App is listenign on port 3000");
})