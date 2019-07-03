//importing the modules
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var marketAPIData = require('../data/marketData.json');
var fs = require('fs');

//body parse middle ware
var urlencodedParser = bodyParser.urlencoded({ extended: true });


//get request to create market data
router.get('/createMarketData', function(req, res){

    // rendering the page
    res.render('createMarketDataView', {
        pageTitle: "postMarketData",
        pageID: "postMarketData"
    });
});

//get request for the api
router.get('/api/market_data_api', function(req, res){
    // responsing with the data
    res.json(marketAPIData);
});

// post request for the marketData
router.post('/postMarketData', urlencodedParser,function(req,res){

    // this variable will be used to validate
    var errors = req.validationErrors();

    // checking if an error occurs
    if(errors){
        res.render('createMarketDataView',{
            errors:errors
        });
    }else{

        var district = req.body.district;
        var product = req.body.product;
        var price = parseInt(req.body.price);

        marketAPIData.unshift({district,product,price}); //posting the data into the api

        fs.writeFile('app/data/marketData.json', JSON.stringify(marketAPIData), 'utf8',
        function(err){
            console.log(err);
        })

        req.flash('success_msg', 'You have posted a new market data');
        res.redirect('/createMarketData'); //redirecting to the create market page
    } //error closing else brace

});

//exporting the module
module.exports = router;
