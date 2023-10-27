// const express = require('express');
// const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const path = require('path')

const CampgroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String
});

module.exports = mongoose.model('Campground', CampgroundSchema);