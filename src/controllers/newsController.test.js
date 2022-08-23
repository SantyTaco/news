const getNewsByKeyWord = require( "./newsController");
//const { createResponse } = require("node-mocks-http");
//const { generateArticles } = require("../../tests/utils/generate");
//const GnewsDataSource = require('../data_sources/gNewsDataSource');

jest.mock("../data_sources/gnews_data_source");

describe("News Controller", () => {
  describe("get news by keyword", () => {
    it('should return 200 when the gnew response is succsess', () => {
        expect.assertions(1);
        return getNewsByKeyWord.then(data => expect(data).toEqual('Mark'));
        return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
        //mockGnewsDataSource.getGNewsByKeyWord.mockImplementation(() => Promise.resolve());

    });

})

//     it('should return status 400 when the max parameter is a string', () => {
//         const response = createResponse();
//         const controller = new ArticlesController();
        
//         const resStatus = controller.validateMaxNumber(response, 'text');

//         expect(resStatus?.statusCode).toEqual(400);
//     }),
//     it('should return status 400 when the max parameter is 0', () => {
//         const response = createResponse();
//         const controller = new ArticlesController();
        
//         const resStatus = controller.validateMaxNumber(response, '0');

//         expect(resStatus?.statusCode).toEqual(400);
//     }),
//     it('should return status undefined when the max parameter correct', () => {
//         const response = createResponse();
//         const controller = new ArticlesController();
        
//         const resStatus = controller.validateMaxNumber(response, '2');

//         expect(resStatus?.statusCode).toEqual(undefined);
//     })
//     it('should return status 200 when the search is success', () => {
//         const response = createResponse();
//         const controller = new ArticlesController();
//         const articles = generateArticles();
        
//         const resStatus = controller.sendSuccessResult(response, articles);

//         expect(resStatus?.statusCode).toEqual(200);
//     })
//   })
});