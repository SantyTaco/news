const  {generateNews, gNewsData}  = require('../../tests/utils/generate');
  const utils = require("./newsUtils");
  
  describe("Test news utils", () => {
    describe("Format GNews data", () => {
      it("should return a news", () => {
        const gNewsArticles = gNewsData;
        const formatData = utils.formatGNewsData(gNewsArticles.articles, "3", "title");
  
        expect(formatData.maxNewsNumber).toEqual(3);
        expect(formatData.articles.length).toEqual(1);
      });
    });
    describe("Get word frquency data", () => {
      it("should return an object", () => {
        const articles = generateNews();
        const wordFrequency = utils.getWordFrequencyInContent(articles);
  
        expect(wordFrequency.vandaag).toEqual(1);
        expect(wordFrequency.cuador).toEqual(2);
      });
    });
  });
  