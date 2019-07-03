const mongoose = require('mongoose');

const learningSchema = mongoose.Schema({

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
var Learning = module.exports = mongoose.model('learningInfo', learningSchema);
