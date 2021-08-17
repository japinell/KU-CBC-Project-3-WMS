//
//  Operation definition
//
const {
    Schema
} = require('mongoose');

//  
const operationSchema = new Schema({
    operation: {
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

module.exports = operationSchema;