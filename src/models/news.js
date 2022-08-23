class News {
    constructor(
        maxNewsNumber,
        wordFrequency,
        articles,
        searchIn,
    ) {
        this.maxNewsNumber = maxNewsNumber;
        this.wordFrequency = wordFrequency;
        this.articles = articles;
        this.searchIn = searchIn;
    }
}

module.exports = News;