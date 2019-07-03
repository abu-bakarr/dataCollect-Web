var mongoose = require('mongoose');

var exportFlowSchema = mongoose.Schema({
    name:  {
        type: String,
        required: true
    },
    email:  {
        type: String
    },
    address:  {
        type: String,
        required: true
    },
    phone:  {
        type: String,
        required: true
    },
    products:  {
        type: String,
        required: true
    },
    weight:  {
        type: String,
        required: true
    },
    quantity:  {
        type: String,
        required: true
    },
    price:  {
        type: String,
        required: true
    },
    district:  {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    countryFROM:  {
        type: String,
        required: true
    },
    countryTO : {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
    
});

module.exports =  mongoose.model('exportFlowData', exportFlowSchema);
