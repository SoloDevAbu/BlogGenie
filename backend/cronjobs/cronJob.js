const axios = require('axios');
const cron = require('node-cron');
const Me = require('../db');

const fetchAndStoreNews = async () => {
    const url = 'https://api.worldnewsapi.com/top-news?source-country=us&language=en';
    const apiKey = process.env.NEWS_API_KEY;

    try {
        const response = await axios.get(url, {
            headers: {
                'x-api-key': apiKey,
            },
        });

        const topNews = response.data.response.top_news;

        for (const newsCategory of topNews) {
            for (const article of newsCategory.news) {
                const { title, text, summary, image, url } = article;

                const exists = await Me.findOne({ title });
                if (!exists) {
                    await Me.create({
                        title,
                        text,
                        summary,
                        image,
                        source: url,
                    });
                }
            }
        }

        console.log('News articles fetched and stored successfully!');
    } catch (error) {
        console.error('Error fetching or storing news:', error.message);
    }
};

const startNewsCron = () => {
    cron.schedule('0 */6 * * *', fetchAndStoreNews);
};

module.exports = { startNewsCron };