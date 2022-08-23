const News = require ("./news");

describe("Test News class", () => {
  it("should create a news object", () => {
    const articles = new News(5, {}, [], 'title');

    expect(articles.maxNewsNumber).toEqual(5);
    expect(articles.wordFrequency).toEqual({});
    expect(articles.articles.length).toEqual(0);
    expect(articles.searchIn).toEqual('title');
  });
});