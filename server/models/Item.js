//
//  Item definition
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
    upc: {
        type: String,
        required: false, // Not required due to no data
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: false // Not required due to no data
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