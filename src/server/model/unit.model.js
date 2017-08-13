var mongoose = require('mongoose');

var schema = mongoose.Schema;
var unitSchema = new schema({
    unit_id: {
        type: Number,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    picture: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String
    },
    modified: {
        type: Date
    },
    modifiedBy: {
        type: String
    },
    deleted: {
        type: Date
    }
    // lesson: [{
    //     lesson_id: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'unit'
    //     },
    //     lessonName: {
    //         type: String,
    //     },
    //     lessonTitle: {
    //         type: String,
    //     }
    // }]
});
unitSchema.index({ "unit_id": 1 }, { unique: true });
var unit = mongoose.model('Unit', unitSchema);

module.exports = unit;