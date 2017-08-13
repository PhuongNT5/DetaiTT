var config = require('./../config');
var mongoose = require('mongoose');
var url = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/learn-english';
mongoose.connect(url);
/* "host": "admin:1234567@ds149511.mlab.com:49511",*/