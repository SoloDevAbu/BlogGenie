const Me = require("../db");

const getArticle = async (req, res) => {
    const { id } = req.params;

    try {
        const article = await Me.findById(id);

        if(!article) {
            return res.status(404).json({
                meg: 'Article not found'
            })
        }

        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = getArticle;