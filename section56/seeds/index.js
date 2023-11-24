const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '65551c101cfc083c3a5e3ba3',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [
                {
                    url: 'https://res.cloudinary.com/dgo3xc5ms/image/upload/v1700251908/YelpCamp/z16osstiscmdalzblyeq.jpg',
                    filename: 'YelpCamp/mjvjjzy2tg7vlnx7ekau'
                }
            ],
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam architecto fugit incidunt ea earum! Nisi obcaecati dolores eveniet dolorum nesciunt, eligendi molestiae cupiditate ea ab inventore dicta nihil, cumque consectetur.',
            price,
            geometry: {
                type: 'Point', coordinates: [cities[random1000].latitude,
                cities[random1000].longitude]
            }
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})