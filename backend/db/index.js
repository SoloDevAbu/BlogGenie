const mongoose = require('mongoose');
const mySchema = require('./model/mymodel');
require('dotenv').config();
const mongoUrl = process.env.MONGO_URI;

mongoose.connect(mongoUrl);

const Me = mongoose.model('Me', mySchema);

module.exports = Me;