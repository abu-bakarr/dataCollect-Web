const mongoose = require('mongoose');

const prodSchema = mongoose.Schema({

    "district":  {
        type: String,
        required: true
    },
    "products": [
      {
        "name": String,
        "quantity": String
      }
    ],
    "date": {
        type: Date,
        default: Date.now()
    }
});

//exporting the model
var ProductsPerDistrict = module.exports = mongoose.model('productsPerDistrict', prodSchema);
