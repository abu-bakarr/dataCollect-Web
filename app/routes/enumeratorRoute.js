var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//importing the model
var Enumerator = require('../models/enumerator_model');

//get request for the enumerator
router.get('/enumerator', (req, res) => {

    // rendering the page
    res.render('enumeratorView', {
        pageTitle: "enumerator",
        pageID: "enumerator"
    });
});

// post request for the enumerator
router.post('/enumerator', (req,res) => {

    const { regFirstName, regLastName, regUsername, regEmail, regStAddress, regCity, regState, regPassword, regConfirmPassword} = req.body;

    // error arrays
    let errors = [];

    // check required fields
    if(!regFirstName || !regLastName || !regUsername || !regEmail || !regStAddress || !regCity || !regState || !regPassword || !regConfirmPassword){
        errors.push({ msg: 'Please fill in all fields' });
    }

    // check if password match
    if(regPassword != regConfirmPassword){
        errors.push({ msg: 'Passwords do not match' });
    }

    // check password length
    if(regPassword.length < 6){
        errors.push({ msg: 'Passwords should be at least 6 characters' });
    }

    // check if we do have some errors
    if(errors.length > 0){
        // re-render the page
        res.render('enumeratorView',{
            pageTitle: "enumerator",
            pageID: "enumerator",
            errors,
            regFirstName,
            regLastName,
            regUsername,
            regEmail,
            regStAddress,
            regCity,
            regState,
            regPassword,
            regConfirmPassword
         });
    }else{
      // if validation passed run the following below
      Enumerator.findOne({ email: regEmail })
        .then(enumerator => {
            if (enumerator) {
                errors.push({ msg: 'A user with that email is already registered'});
                res.render('enumeratorView',{
                    pageTitle: "enumerator",
                    pageID: "enumerator",
                    errors,
                    regFirstName,
                    regLastName,
                    regUsername,
                    regEmail,
                    regStAddress,
                    regCity,
                    regState,
                    regPassword,
                    regConfirmPassword
                });
            } else {
                 var newEnumerator = new Enumerator({
                    _id: new mongoose.Types.ObjectId(),
                    firstName: regFirstName,
                    lastName: regLastName,
                    username: regUsername,
                    email: regEmail,
                    address: regStAddress,
                    city: regCity,
                    state: regState,
                    password: regPassword
                });
                // making reference to the createEnumerator function in the enumerator model
                Enumerator.createEnumerator(newEnumerator, (err, enumerator) => {
                    if(err) throw err; //throw an error
                    req.flash('success_msg', 'You have just registered a new enumerator');
                    res.redirect('/enumerator');
                    console.log(enumerator);
                });
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

});

// delete request
router.delete('/enumerator/:enumeratorId', (req,res,next) => {
    Enumerator.deleteOne({_id: req.params.enumeratorId})
      .exec()
      .then(result => {
        res.status(200).json({
          message: "Enumerator deleted"
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
});

//exporting the module
module.exports = router;