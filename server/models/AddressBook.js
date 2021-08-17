//
//  Address Book definition
//
const {
    Schema
} = require('mongoose');

//  
const addressBookSchema = new Schema({
    number: {
        type: Integer,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    type: {
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

module.exports = addressBookSchema;