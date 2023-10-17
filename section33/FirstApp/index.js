const express = require('express');

const app = express();

// app.use((req, res) => {
//     console.log("We got a new request")
//     // console.dir(req)
//     // res.send("Hello we got a request, so here's a response")
//     // res.send({ color: 'red' })
//     res.send('<h1>This is a header</h1>')
// })

app.get('/', (req, res) => {
    console.log("We got a home request")
    res.send('Home Page!!!')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>This is a ${subreddit} page</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>This is the ${postId} ID on the ${subreddit} page</h1>`)
})

app.get('/cats', (req, res) => {
    console.log("We got a cat request")
    res.send('MEOW')
})

app.post('/cats', (req, res) => {
    console.log("We got a POST cat request")
    res.send('We got a POST cat request')
})

app.get('/dogs', (req, res) => {
    console.log("We got a dog request")
    res.send('WOOF')
})

app.get('/search', (req, res) => {
    const { q } = req.query
    if (!q) {
        res.send(`<h1>Nothing searched</h1>`)
    } else {
        res.send(`<h1>This is a search page with query string(s) ${q}</h1>`)
    }
})

app.get('*', (req, res) => {
    console.log("We got a mystery request")
    res.send('I do not know this route')
})

app.listen(3000, () => {
    console.log("Listening on Port 3000")
})