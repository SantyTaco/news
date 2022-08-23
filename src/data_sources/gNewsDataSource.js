const axios = require("axios");
const { formatGNewsData } = require("../utils/newsUtils");

const GNEWS_URL = "https://gnews.io/api/v4/";
const GNEWS_TOKEN = "efc7850a2beac4b7c5aec5af03544eed";

const getGNewsByKeyWord = async (keyWord, max, searchIn) => {
  console.log("keyWord", keyWord);
  const result = await axios.get(`${GNEWS_URL}/search`, {
    params: {
      q: keyWord,
      max: max,
      in: searchIn,
      token: GNEWS_TOKEN,
    },
  });

  const articles = formatGNewsData(result?.data?.articles, max, searchIn);
  return articles;
};

module.exports = getGNewsByKeyWord;
