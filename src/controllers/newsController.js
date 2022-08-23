const GnewsDataSource = require('../data_sources/gnews_data_source');

const getNewsByKeyWord = async (req, res) => {
    console.log('Get News');
    const gnews = new GnewsDataSource();
    const response = await gnews.getGNewsByKeyWord('Ecuador');
    res.status(200).json(response);
}

module.exports =  {
    getNewsByKeyWord
};