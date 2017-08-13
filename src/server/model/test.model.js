var mongoose = require('mongoose');

var schema = mongoose.Schema;
var testSchema = new schema({

    test_id: {
        type: Number,
        require: true,
        unique: true
    },
    // question_id: {
    //     type: Number,
    //     require: true,
    // },
    name: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    numberOfQues: {
        type: Number,
        require: true
    },
    time: {
        type: Date,
        require: true
    },
    level: {
        type: String,
        require: true
    }
});
testSchema.index({ "test_id": 1 }, { unique: true }, { unique: true });
var test = mongoose.model('Test', testSchema);
module.exports = test;