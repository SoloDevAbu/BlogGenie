const { Router } = require('express');
const getArticle = require('../../controller/article.controller');
const router = Router();

router.get('/:id', getArticle);

module.exports = router;