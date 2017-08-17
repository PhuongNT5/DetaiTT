var mongoose = require('mongoose');

var schema = mongoose.Schema;
var testdetailSchema = new schema({

    testId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Test',
        unique: true
    },
    questionId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }],

});
testdetailSchema.index({ "test_id": 1 }, { unique: true });
var testdetail = mongoose.model('TestDetail', testdetailSchema);
module.exports = testdetail;