//importing the modules
var MakeOrder = require('../models/make_order.js');
var orderData = require('../data/productOrders.json');
var marketAPIData = require('../data/marketData.json');
var avaProductForSaleModel = require('../models/avaProductsModel');
var avaProdPerDistModel = require('../models/avaProdPerDistModel');
var aboutModel = require('../models/about_model');
var farmerModel = require('../models/farmerModel');
var learningModel = require('../models/learning_model');

var bodyParser = require('body-parser');
//farmer by district Api
var farmerDisDataApi = require('../data/farmerDisApi.json');

// PRODUCTS JSON
var riceData = require('../data/products/prod_rice.json');
var cacaoData = require('../data/products/prod_cacao.json');
var coffeeData = require('../data/products/prod_coffee.json');
var palmoilData = require('../data/products/prod_palmoil.json');
var cassavaData = require('../data/products/prod_cassava.json');
// END OF PRODUCTS JSON

var fs = require('fs');


module.exports = {
    // index get request
    indexGet: (req, res) => {

        var info = req.app.get('info'); // getting access to the availableProducts variable from the app.js
        // var productData = req.app.get('availableProducts'); // getting access to the availableProducts variable from the app.js

        // var fetchedCashCrops = productData.products.cash_crops; //getting the cash_crops only from the products list
        var fetchedInfo = info.info;

        // RETREVING ALL THE PRODUCTS FOR SALE FROM THE DATABASE
        avaProductForSaleModel.find()
            .exec()
            .then(fetchedProduct => {
                // RETREVING ALL THE PRODUCTS PER DISTRICT
                avaProdPerDistModel.find()
                    .exec()
                    .then(fetchedProductPerDistrict => {
                        // RETREVING ALL THE LEARNING MATERIALS
                        learningModel.find()
                            .then(material => {
                                res.render('index', {
                                    pageTitle: "Products",
                                    pageID: "home",
                                    fetchedProduct: fetchedProduct,
                                    fetchedProductPerDistrict: fetchedProductPerDistrict,
                                    info: fetchedInfo,
                                    material: material

                                });
                            })
                            .catch(err => {
                                console.log(err);
                            });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    },

    // login get request
    farmersGet: (req, res) => {
        //declaring variables
        var farmerDataFile = req.app.get('appData'); // getting access to the appData variable from the app.js
        var pageFarmers = farmerDataFile.farmers;

        // fetching all the cbos from the farmer model
        farmerModel.find()
            .then(fbo => {
                res.render('farmers', {
                    pageTitle: "farmers-page",
                    pageID: "farmers-page",
                    farmer: fbo
                });
            })
            .catch(err => {
                console.log(err);
            });
    },

    // farmer specific get route
    farmerSpecificGet: (req, res) => {

        const id = req.params.id;

        // fetching all the cbos from the farmer model
        farmerModel.findById(id)
            .then(fetchedFbo => {
                res.render('farmerDetailsPage', {
                    pageTitle: "farmers-details-page",
                    pageID: "farmers-details-page",
                    farmerDetail: fetchedFbo
                });
            })
            .catch(err => {
                console.log(err);
            });
    },

    // about page get request
    aboutGet: (req, res) => {
        // fetching the about content from the about model
        aboutModel.find()
            .then(fetchedAbout => {
                res.render('about', {
                    pageTitle: "about-page",
                    pageID: "about-page",
                    fetchedAbout: fetchedAbout
                });
            })
            .catch(err => {
                console.log(err);
            });
    },

    // chart page get request
    chartGet: (req, res) => {
        // rendering the page
        res.render('chartView', {
            pageTitle: "chartView",
            pageID: "chartView"
        });
    },

    // make order post request
    makeOrderPost: (req, res) => {

        var { name, address, email, telephone, product, quantity, fbo } = req.body;

        // check if fields are empty
        if (!name || !address || !telephone || !email || !product || !quantity || !fbo) {
            req.flash('error_msg', 'Please fill in all the fields');
            res.redirect('/');
        } else {
            // instantiating a new order
            newOrder = new MakeOrder({
                name: name,
                address: address,
                tele: telephone,
                email: email,
                productName: product,
                quantity: quantity,
                fbo: fbo
            });
            // saving the order
            newOrder.save()
                .then(order => {
                    req.flash('success_msg', 'Your order has been placed');
                    res.redirect('/');
                    console.log(order + '=> Order placed Successful');
                })
                .catch(err => {
                    console.log(err);
                });

        }

    },

    // market api get route
    getMarketApi: (req, res) => {
        // responsing with the data
        res.json(marketAPIData);
    },

    // rice market api get route
    getRiceMarketApi: (req, res) => {
        // responsing with the data
        res.json(riceData);
    },

    // cacao market api get route
    getCacaoMarketApi: (req, res) => {
        // responsing with the data
        res.json(cacaoData);
    },

    // coffee market api get route
    getCoffeeMarketApi: (req, res) => {
        // responsing with the data
        res.json(coffeeData);
    },

    // palmoil market api get route
    getPalmoilMarketApi: (req, res) => {
        // responsing with the data
        res.json(palmoilData);
    },

    // cassava market api get route
    getCassavaMarketApi: (req, res) => {
        // responsing with the data
        res.json(cassavaData);
    },

    // market api get route
    getfarmerDisApi: (req, res) => {
        // responsing with the data
        res.json(farmerDisDataApi);
    },

    learningGet: (req, res) => {

        const id = req.params.id;

        learningModel.findById(id)
            .exec()
            .then(material => {
                res.render('learningInfo', {
                    pageID: 'home',
                    pageTitle: 'learning-page',
                    materials: material
                });
            })
            .catch(err => {
                console.log(err);
            });
    },

    // products for both sale and available info
    productsGet: (req, res) => {

        var info = req.app.get('info'); // getting access to the availableProducts variable from the app.js
        // var productData = req.app.get('availableProducts'); // getting access to the availableProducts variable from the app.js

        // var fetchedCashCrops = productData.products.cash_crops; //getting the cash_crops only from the products list
        var fetchedInfo = info.info;

        // RETREVING ALL THE PRODUCTS FOR SALE FROM THE DATABASE
        avaProductForSaleModel.find()
            .exec()
            .then(fetchedProduct => {
                // RETREVING ALL THE PRODUCTS PER DISTRICT
                avaProdPerDistModel.find()
                    .exec()
                    .then(fetchedProductPerDistrict => {
                        res.render('product_page', {
                            pageTitle: "Products",
                            pageID: "products",
                            fetchedProduct: fetchedProduct,
                            fetchedProductPerDistrict: fetchedProductPerDistrict,
                            // info: fetchedInfo,
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    }
};