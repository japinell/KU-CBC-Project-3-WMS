//
//  Location definition
//
const {
    Schema
} = require('mongoose');

//  
const itemSchema = new Schema({
    item: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    primaryUoM: {
        type: String,
        default: "EA"
    },
    UPC: {
        type: String,
    },
    restorePoint: {
        type: Integer,
        min: 0,
        default: 0
    },
    user: {
        type: String,
        required: true,
    },   
    datetime: {
        type: Date,
        required: true,
    },   
});

module.exports = itemSchema;