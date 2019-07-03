const mongoose = require('mongoose');
const farmerSchema = mongoose.Schema({

    fbo_name: {
        type: String,
        required: true
    },
    products: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    chiefdom: {
        type: String
    },
    district: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    total_no_of_staffs: {
        type: String,
        required: true
    },
    brief_bio: {
        type: String
    },
    executive_head_name: {
        type: String,
        required: true
    },
    executive_head_address: {
        type: String,
        required: true
    },
    executive_head_tele: {
        type: String,
        required: true
    },
    executive_head_email: {
        type: String
    },
    gender: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: ''
    },
    registeredDate: {
        type: Date,
        default: Date.now()
    }
});

//exporting the model
var Farmer = module.exports = mongoose.model('farmers', farmerSchema);

//get admin function
module.exports.getFarmerByUsername = function(username, callback) {
    var query = { username: username };
    Farmer.findOne(query, callback);
}

//get admin function
module.exports.getFarmerById = function(id, callback) {
    Farmer.findById(id, callback);
}