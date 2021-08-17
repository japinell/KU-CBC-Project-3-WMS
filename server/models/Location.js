//
//  Location definition
//
const {
    Schema
} = require('mongoose');

//  This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const locationSchema = new Schema({
    area: {
        type: String,
        required: true,
    },
    row: {
        type: String,
    },
    bay: {
        type: String,
    },
    level: {
        type: String,
    },
    bin: {
        type: String,
    },
    allowPutaway: {
        type: Boolean,
    },    
    allowPicking: {
        type: Boolean,
    },    
    allowReplenish: {
        type: Boolean,
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

module.exports = locationSchema;