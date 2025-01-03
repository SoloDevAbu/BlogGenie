const axios = require('axios');
const Me = require('../db');

const getAllNews = async (req, res) => {
    try {
        const news = await Me.find();
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllNews };