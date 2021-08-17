//
//  Unit of measure conversion definition
//
const {
    Schema
} = require('mongoose');

//  
const conversionSchema = new Schema({
    item: {
        type: String,
        required: true,
    },
    uomFrom: {
        type: String,
        required: true,
    },
    uomTo: {
        type: String,
        required: true,
    },
    factor: {
        type: Integer,
        required: true,
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

module.exports = conversionSchema;