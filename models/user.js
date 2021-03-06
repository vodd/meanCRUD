const mongoose = require('mongoose');
const bcryp = require('bcryptjs');
const config = require('../config/database')

//User schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function (username, callback) {
    const query = {
        username: username
    }
    User.findOne(query, callback);
}

module.exports.addUser = function (newUser, callback) {
    bcryp.genSalt(10, (err, salt) => {
        bcryp.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash;
            newUser.save(callback)
        })
    })
}

module.exports.comparePassword = function (condidatePassword, hash, callback) {
    bcryp.compare(condidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch)
    });
}