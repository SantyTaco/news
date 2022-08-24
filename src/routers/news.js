const express = require("express");
const { NewsController } = require("../controllers/newsController");

const router = express.Router();
const newsController = new NewsController();
router.get("/news/search", newsController.getNewsByKeyWord);

module.exports = router;
