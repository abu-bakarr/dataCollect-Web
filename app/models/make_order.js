const mongoose = require('mongoose'); //requiring mongoose model
const Schema = mongoose.Schema;

//create make or pre-order schema 
const makeOrderSchema = new Schema({
    //objects and data type
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    tele: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    fbo: {
        type: String,
        required: true
    },
    dateOfOrder: {
        type: Date,
        default: Date.now()
    }
});


//create make or pre-order model
const MakeOrder = mongoose.model('product_orders', makeOrderSchema);

//exporting the models
module.exports = MakeOrder;