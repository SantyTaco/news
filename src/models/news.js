class Articles {
    constructor(
        totalArticles,
        wordFrequency,
        articles,
        searchIn,
    ) {
        this.totalArticles = totalArticles;
        this.wordFrequency = wordFrequency;
        this.articles = articles;
        this.searchIn = searchIn;
    }
}

module.exports = Articles;