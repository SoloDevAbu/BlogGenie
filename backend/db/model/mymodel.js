const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
    title: String,
    text: String,
    summary: String,
    image: String,
    source: String,
}, { timestamps: true })

module.exports = mySchema;