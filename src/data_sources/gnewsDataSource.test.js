const axios = require('axios');
const MockAdapter = require("axios-mock-adapter");
const  {generateNews, gNewsData}  = require('../../tests/utils/generate');
const getGNewsByKeyWord = require('./gNewsDataSource');

describe("Get GNews", () => {
    let mock;
    const GNEWS_URL = "https://gnews.io/api/v4/";

    beforeAll(() => {
      mock = new MockAdapter(axios);
    });
  
    afterEach(() => {
      mock.reset();
    });

    describe("when API call is successful", () => {
      it("should return news list", async () => {
        const gNews = gNewsData;
        const news = generateNews();
        mock.onGet(`${GNEWS_URL}/search`).reply(200, gNews);

        const result = await getGNewsByKeyWord('test', '3','title');

        expect(mock.history.get[0].url).toEqual(`${GNEWS_URL}/search`);
        expect(result).toEqual(news);
      });
    });
  });