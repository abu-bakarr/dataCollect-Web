const mongoose = require('mongoose');
const avaProductsSchema = mongoose.Schema({

    // fbo_name:  {
    //     type: String,
    //     required: true
    // },
    product: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: ''
    },
    fbo: {
        type: String,
        default: ''
    },
    date: {
        type: Date,
        default: Date.now()
    }
    // location:  {
    //     type: String,
    //     required: true
    // },
    // chiefdom:  {
    //     type: String
    // },
    // district:  {
    //     type: String,
    //     required: true
    // },
    // region:  {
    //     type: String,
    //     required: true
    // },
    // total_no_of_staffs:  {
    //     type: String,
    //     required: true
    // },
    // brief_bio:  {
    //     type: String
    // },
    // executive_head_name:  {
    //     type: String,
    //     required: true
    // },
    // executive_head_address:  {
    //     type: String,
    //     required: true
    // },
    // executive_head_tele:  {
    //     type: String,
    //     required: true
    // },
    // executive_head_email:  {
    //     type: String
    // },
    // gender:  {
    //     type: String,
    //     required: true
    // },

});

//exporting the model
var avaProducts = module.exports = mongoose.model('avaProductsForSale', avaProductsSchema);