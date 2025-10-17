const { getMainPageData } = require('../services/mainPageService');

const getMainPageDataController = async (req, res) => {
  try {
    const data = await getMainPageData();
    res.status(200).json({
      success: true,
      message: 'Main page data fetched successfully',
      data,
    });
  } catch (error) {
    console.error('Main page data error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch main page data',
    });
  }
};

module.exports = { getMainPageDataController };