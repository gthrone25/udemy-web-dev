// const express = require('express');
// const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const path = require('path')

const CampgroundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String
});

module.exports = mongoose.model('Campground', CampgroundSchema);