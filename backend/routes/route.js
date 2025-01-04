const { Router } = require('express');
const router = Router();
const myRoute = require('./me/my.route');
const articleRoute = require('./particularArticle/article.route');

router.use('/me', myRoute);
router.use('/article', articleRoute);

module.exports = router;