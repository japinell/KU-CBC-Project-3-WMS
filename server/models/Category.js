//
//  Category definition
//
const {
    Schema
} = require('mongoose');

//  
const categorySchema = new Schema({
    category: {
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

module.exports = categorySchema;