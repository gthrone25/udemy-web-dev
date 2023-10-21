const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("Connection Open")
    })
    .catch(err => {
        console.log('Error!!');
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price has to be positive.. duh']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})

productSchema.methods.greet = function () {
    console.log('Helllo! Hi! Howdy!')
    console.log(`- from ${this.name}`)
}

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Bike Helmet' });
    foundProduct.greet();
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct)
}

findProduct();



Product.fireSale().then(res => console.log(res))

// const bike = new Product({ name: 'Mountain Bike', price: 599, color: 'red' })
// bike.save()
//     .then((data) => {
//         console.log("It worked!")
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('Error!!');
//         console.log(err)
//     })

// const bikeHelmet = new Product({ name: 'Bike Helmet', price: 19.50, categories: ['safety', 'cycling'], 'qty.online': 100 })
// bikeHelmet.save()
//     .then((data) => {
//         console.log("It worked!")
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('Error!!');
//         console.log(err)
//     })

// const pump = new Product({ name: 'Tire Pump', price: 19.50, categories: ['cycling'] })
// pump.save()
//     .then((data) => {
//         console.log("It worked!")
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('Error!!');
//         console.log(err)
//     })

// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -10.99 }, { new: true, runValidators: true })
//     .then((data) => {
//         console.log("It worked!")
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('Error!!');
//         console.log(err)
//     })

// const pump = new Product({ name: 'Cycling Jersey', price: 28.50, categories: ['cycling'], size: 'XS' })
// pump.save()
//     .then((data) => {
//         console.log("It worked!")
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('Error!!');
//         console.log(err)
//     })