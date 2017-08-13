var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    username: {
        type: String
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    image: {
        type: String
    },
    birthday: {
        type: String
    },
    gender: {
        type: String
    },
    level: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    roles: {
        type: String
    },
    scoreId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Score'
    }],
});
var user = mongoose.model('user', userSchema);

module.exports = user;