const express = require('express');
const {getNewsByKeyWord } = require('../controllers/newsController');

const router = express.Router();

router.get('/articles/search', getNewsByKeyWord);

module.exports = router;
