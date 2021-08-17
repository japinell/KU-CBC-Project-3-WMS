//
//  Inventory definition
//
const {
    Schema
} = require('mongoose');

//  
const inventorySchema = new Schema({
    item: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },  
    lot: {
        type: String,
    },
    primary: {
        type: Boolean,
        default: false,
    }, 
    quantity: {
        type: Integer,
        min: 0.00,
        default: 0,
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

module.exports = inventorySchema;