const generateNews = require("../../../tests/utils/generate")
const users = {
    4: {name: 'Mark'},
    5: {name: 'Paul'},
  };
  
  export default function getGNewsByKeyWord(keyWord, max, searchIn) {
    return new Promise((resolve, reject) => {
        const mockResponse = generateNews();
      //const userID = parseInt(url.substr('/users/'.length), 10);
      process.nextTick(() =>
        users[userID]
          ? resolve(mockResponse)
          : reject({
              error: `User with ${userID} not found.`,
            }),
      );
    });
  }