class Article {
  constructor(title, description, content, url, image, publishAt, sourceName) {
    this.title = title;
    this.description = description;
    this.content = content;
    this.url = url;
    this.image = image;
    this.publishAt = publishAt;
    this.sourceName = sourceName;
  }
}

module.exports = Article;
