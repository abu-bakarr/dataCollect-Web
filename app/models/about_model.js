const mongoose = require('mongoose');

const aboutSchema = mongoose.Schema({

    title:  {
        type: String
    },
    content:  {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

//exporting the model
var About = module.exports = mongoose.model('about', aboutSchema);
