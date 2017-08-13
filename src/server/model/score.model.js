var mongoose = require('mongoose');

var schema = mongoose.Schema;
var scoreSchema = new schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    testId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Test'
    },
    time: {
        type: Date
    },
    score: {
        type: Number,
        require: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    modified: {
        type: Date
    }
});

var score = mongoose.model('Score', scoreSchema);
module.exports = score;