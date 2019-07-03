var mongoose = require('mongoose');

var marketSchema = mongoose.Schema({
    locality:  {
        type: String,
        required: true
    },
    chiefdom:  {
        type: String
    },
    district:  {
        type: String,
        required: true
    },
    product:  {
        type: String,
        required: true
    },
    region:  {
        type: String,
        required: true
    },
    enumerator:  {
        type: String,
        required: true
    },
    date:  {
        type: Date,
        default: Date.now()
    },
    wholesale_unit:  {
        type: String,
        required: true
    },
    wholesale_weight:  {
        type: String,
        required: true
    },
    wholesale_price: {
        type: String,
        required: true
    },
    retail_unit:  {
        type: String,
        required: true
    },
    retail_weight : {
        type: String,
        required: true
    },
    retail_price: {
        type: String,
        required: true
    }
    
});

module.exports =  mongoose.model('marketData', marketSchema);
