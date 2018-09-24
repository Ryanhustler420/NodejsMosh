const bcryptjs = require('bcryptjs');
const Joi = require('Joi');
const {User} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/',async (req,res) => {

    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Invalid email or password.');

    const validPassword = await bcryptjs.compare(req.body.password,user.password);
    if(!validPassword) return res.status(400).send('Invalid email or password.');

    res.send(true);
});

function validate(req) {
    const schema = {
      email: Joi.string().min(5).max(255).email({ minDomainAtoms: 2 }).required(),
      password: Joi.string().min(5).max(255).regex(/^[a-zA-Z0-9]{3,30}$/).required()
};
  
    return Joi.validate(req, schema);
  }


module.exports = router;