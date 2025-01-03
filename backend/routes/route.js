const { Router } = require('express');
const router = Router();
const myRoute = require('./me/my.route');

router.use('/me', myRoute);

module.exports = router;