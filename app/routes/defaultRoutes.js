var express = require('express');
var router = express.Router();
const defaultController = require('../controllers/defaultControllers');

// homepage requests
router.route('/')
    .get(defaultController.indexGet)

// farmers page requests
router.route('/farmers')
    .get(defaultController.farmersGet);

// specific farmer get route
router.route('/farmers/:id')
    .get(defaultController.farmerSpecificGet);

// about page route
router.route('/about')
    .get(defaultController.aboutGet);

// chart page route
router.route('/charts')
    .get(defaultController.chartGet);

// produts page route
router.route('/products')
    .get(defaultController.productsGet);

// make other route
router.route('/order')
    .post(defaultController.makeOrderPost);

// market data api
router.route('/api/market_data_api')
    .get(defaultController.getMarketApi);

// rice data api
router.route('/api/riceMarketApi')
    .get(defaultController.getRiceMarketApi);

// cacao data api
router.route('/api/cacaoMarketApi')
    .get(defaultController.getCacaoMarketApi);

// coffee data api
router.route('/api/coffeeMarketApi')
    .get(defaultController.getCoffeeMarketApi);

// palmoil data api
router.route('/api/palmoilMarketApi')
    .get(defaultController.getPalmoilMarketApi);

// cassava data api
router.route('/api/cassavaMarketApi')
    .get(defaultController.getCassavaMarketApi);

router.route('/api/farmer_dis_api')
.get(defaultController.getfarmerDisApi);

// learning route
router.route('/learning/info/:id')
    .get(defaultController.learningGet);

module.exports = router;
