const axios = require("axios");
const { formatGNewsData } = require("../utils/newsUtils");

const GNEWS_URL = "https://gnews.io/api/v4/";
const GNEWS_TOKEN = "efc7850a2beac4b7c5aec5af03544eed";

class Gnews {
  getGNewsByKeyWord = async (keyWord, max, searchIn) => {
    const result = await axios.get(`${GNEWS_URL}/search`, {
      params: {
        q: keyWord || "",
        max: max || "",
        in: searchIn || "tilte,description",
        token: GNEWS_TOKEN,
      },
    });

    console.log("result", result.data.articles);

    const articles = formatGNewsData(result?.data?.articles, 1, "title");
    return articles;
  };
}

module.exports = Gnews;
