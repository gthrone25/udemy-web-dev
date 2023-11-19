// const express = require('express');
// const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const path = require('path')

const reviewSchema = new Schema({
    body: String,
    rating: Number
});

module.exports = mongoose.model('Review', reviewSchema);