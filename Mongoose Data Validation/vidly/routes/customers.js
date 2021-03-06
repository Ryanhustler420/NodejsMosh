const {Customer,validate} = require('../models/customer');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/',async (req,res) => {
    const customers = await Customer.find().sort('name');
    res.send(customers);
});

router.post('/', async (req,res) => {
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let customer = new Customer({
        isGold:req.body.isGold,
        name:req.body.name,
        phone:req.body.phone
    });

    customer = await customer.save();
    res.send(customer);
});

router.get('/:id', async (req,res) => {
   const customer =  await Customer.findById(req.params.id);
   res.send(customer);
});


router.put('/:id',async (req,res) => {

    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    const customer = Customer.findByIdAndUpdate(req.params.id,{
        $set:{
           name:req.body.name,
           isGold:req.body.isGold,
           phone: +req.body.phone 
        }
    },{new:true});

    res.send(customer);
});

router.delete('/:id',async (req,res) => {
    const customer = await Customer.findByIdAndRemove(req.params.id)
    res.send(customer);
});
  
module.exports = router;