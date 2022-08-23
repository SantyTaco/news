const News = require('../models/news');
const New = require('../models/new')

function formatGNewsData(gNewsArticles, max, searchIn) {
    const articleList = gNewsArticles?.map((article) => {
        return new New(
            article.title,
            article.description,
            article.content,
            article.url,
            article.image,
            article.publishAt,
            article.source.name
        );
    });

    const articles = new News(parseInt(max), 0, articleList, searchIn);
    return articles;
}

const getWordFrequencyInContent = (articles) => {
    const wordFrequency = {};
    articles?.articles?.map((article) => {
      const words = article.content.split(/['-_",.`~?!&*$%@\s()]/);
      words?.map((word) => {
        if (word) {
          wordFrequency[word] ? wordFrequency[word] = wordFrequency[word] + 1 : wordFrequency[word] = 1;
        }
      });
    });
    return wordFrequency;
  }

  module.exports =  {
    formatGNewsData,
    getWordFrequencyInContent
};