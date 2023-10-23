const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path')
const methodOverride = require('method-override');


const Product = require('./models/product');

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use(methodOverride('_method'))

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("Mongo Connection Open")
    })
    .catch(err => {
        console.log('Mongo Error!!');
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const categories = ['fruit', 'vegetable', 'dairy']

app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category: category });
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({});
        res.render('products/index', { products, category: 'All' })
    }


})

app.get('/products/new', async (req, res) => {
    const products = await Product.find({});
    res.render('products/new', { products, categories })
})

app.post('/products', async (req, res) => {
    const { name, price, category } = req.body;
    const newProduct = new Product(req.body)
    await newProduct.save();
    console.log(newProduct)
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show', { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories })
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const updProduct = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    console.log(updProduct);
    res.redirect(`/products/${id}`);
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    // const delProduct = await Product.findOneAndDelete({ _id: id });
    const delProduct = await Product.findByIdAndDelete({ _id: id });
    console.log(delProduct);
    res.redirect(`/products`);
})

app.listen(3000, () => {
    console.log("App is listenign on port 3000")
})