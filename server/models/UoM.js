//
//  Unit of measure definition
//
const {
    Schema
} = require('mongoose');

//  
const uomSchema = new Schema({
    uom: {
        type: String,
        required: true,
    },
    description: {
        type: String,
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

module.exports = uomSchema;