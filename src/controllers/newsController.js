const getGNewsByKeyWord = require("../data_sources/gNewsDataSource");
const { getWordFrequencyInContent } = require("../utils/newsUtils");
const NodeCache = require("node-cache");

const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });
const MAX_IS_NOT_NUMBER_MESSAGE = "max parameter is not a number";
const MAX_IS_ZERO_MESSAGE = "max parameter is zero";
const KEYWORD_IS_REQUIRED_MESSAGE = "the key keyword is required";
const SEARCH_IN_IS_NOT_BOOLEAN_MESSAGE = "inTitle allows true or false value";
class NewsController {
  getNewsByKeyWord = async (req, res) => {
    console.log("req", req.query);
    try {
      let articles;
      const keyword = req.query?.keyword || "";
      const max = req.query?.max || "100";
      const inTitle = req.query?.inTitle || false;

      this.validateInTitle(res, inTitle);
      const searchIn = inTitle === "true" ? "title" : "title,description";

      this.validateMaxNumber(res, max);
      articles = cache.get(keyword);
      const isNewsCached = this.isNewsCached(articles, max, searchIn, res);

      !isNewsCached
        ? (articles = await getGNewsByKeyWord(keyword, max, searchIn))
        : null;

      articles.wordFrequency = getWordFrequencyInContent(articles);
      cache.set(keyword, articles, 60);

      return this.sendSuccessResult(res, articles);
    } catch (e) {
        return this.sendErrorResult(res, KEYWORD_IS_REQUIRED_MESSAGE);
    }
  };

  validateInTitle = (res, inTitle) => {
    if (inTitle) {
      let boolOutput =
        inTitle.toLowerCase() === "true" || inTitle.toLowerCase() === "false";
      if (!boolOutput) {
        return this.sendErrorResult(res, SEARCH_IN_IS_NOT_BOOLEAN_MESSAGE);
      }
    }
  };

  validateMaxNumber = (res, max) => {
    const maxNumber = parseInt(max);
    if (isNaN(maxNumber)) {
      return this.sendErrorResult(res, MAX_IS_NOT_NUMBER_MESSAGE);
    } else if (maxNumber == 0) {
      return this.sendErrorResult(res, MAX_IS_ZERO_MESSAGE);
    }
  };

  isNewsCached(articles, max, searchIn) {
    console.log("articles cached", articles);
    console.log("max cached", max);
    console.log("searchIn cached", searchIn);

    try {
      return (
        articles &&
        articles.maxNewsNumber == parseInt(max) &&
        articles.searchIn == searchIn
      );
    } catch (e) {
      console.log(e);
    }
  }

  sendErrorResult = (res, message) => {
    return res.status(400).json({
      message: message,
    });
  };

  sendSuccessResult = (res, articles) => {
    return res.status(200).json(articles);
  };
}

module.exports = {
  NewsController,
};
