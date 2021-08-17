//
//  Role definition
//
const {
    Schema
} = require('mongoose');

//  
const roleSchema = new Schema({
    role: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    allowPutaway: {
        type: Boolean,
        default: false,
    },    
    allowPicking: {
        type: Boolean,
        default: false,
    },    
    allowReplenish: {
        type: Boolean,
        default: false,
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

module.exports = roleSchema;