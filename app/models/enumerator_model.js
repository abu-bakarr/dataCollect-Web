const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const enumeratorSchema = mongoose.Schema({
    firstName:  {
        type: String,
        required: true
    },
    lastName:  {
        type: String,
        required: true
    },
    username:  {
        type: String,
        required: true
    },
    email:  {
        type: String,
        required: true,
        match: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    },
    address:  {
        type: String,
        required: true
    },
    phone:  {
        type: String,
        required: true
    },
    gender:  {
        type: String,
        required: true
    },
    city:  {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    password:  {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default: Date.now
    }
});

//exporting the model
var Enumerator = module.exports = mongoose.model('Enumerators', enumeratorSchema);

module.exports.createEnumerator = function(newEnumerator, callback){
    // hashing the password
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(newEnumerator.password, salt, (err, hash) => {
            if(err) throw err;
            // set password to hash
            newEnumerator.password = hash;
            newEnumerator.save(callback);
        });
    });
}

// get enumerator function
module.exports.getEnumeratorByUsername = function(username, callback){
    var query = {username: username};
    Enumerator.findOne(query, callback);
}

//get enumerator function
module.exports.getEnumeratorById = function(id, callback){
    Enumerator.findById(id, callback);
}

//compare password function
module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch){
        if(err) throw err;
        callback(null, isMatch);
    });
}
