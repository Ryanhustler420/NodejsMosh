const mongoose = require('mongoose');
const Joi = require('joi');

const Customer = mongoose.model('Customer',new mongoose.Schema({
    isGold:{
        type:Boolean,
        default: false
    },
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    },
    phone:{
        type:Number,
        required:true,
        minlength:7,
        maxlength:10
    }
}));

function validateCustomer(customer) {
    const schema = {
        isGold:Joi.boolean(),
        name: Joi.string().min(3).max(50).required(),
        phone: Joi.number().integer()
    };
  
    return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validate = validateCustomer;