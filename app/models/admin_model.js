const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = mongoose.Schema({

    fullname:  {
        type: String,
        required: true
    },
    email:  {
        type: String,
        required: true
    },
    password:  {
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
var Admin = module.exports = mongoose.model('admins', adminSchema);

// module.exports.createAdmin = function(newAdmin, callback){
//     // hashing the password
//     bcrypt.genSalt(10, function(err, salt){
//         bcrypt.hash(newAdmin.password, salt, (err, hash) => {
//             if(err) throw err;
//             // set password to hash
//             newAdmin.password = hash;
//             newAdmin.save(callback);
//         });
//     });
// }

// //get admin function
module.exports.getAdminByEmail = function(email, callback){
    var query = {email: email};
    Admin.findOne(query, callback);
}

//get admin function
module.exports.getAdminById = function(id, callback){
    Admin.findById(id, callback);
}

//compare password function
module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch){
        if(err) throw err;
        callback(null, isMatch);
    });
}
