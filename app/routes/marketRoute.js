var express =  require('express');
var router = express.Router();


//get request for the index
router.get('/market', ensureAuthentication, function(req, res){


    // rendering the page
    res.render('marketView', {
        pageTitle: "market",
        pageID: "market",
        // fetchedFarmersData: data
    });

});

// post request for the index
router.post('/inputMarketData', (req, res) => {
});

// this function will ensure user authenticate before accessing the interface
function ensureAuthentication(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }else{
        req.flash('error_msg', 'You need to login');
        res.redirect('/');
    }
}

module.exports = router;
