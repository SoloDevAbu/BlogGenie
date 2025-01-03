const { Router } = require('express');
const { getAllNews } = require('../../controller/myroute.controller');
const router = Router();

router.get('/news', getAllNews);

module.exports = router;