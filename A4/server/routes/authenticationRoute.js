const express = require('express');
const routes = express.Router();
const bcrypt = require('bcrypt');

let myPass = 'Divya@01';
let saltRounds = 10;
let galatPass = 'divya@01'

routes.get('/encPass',authMiddleware, verifyPassword,(req,res)=>{
    res.send(req.body)
})

async function authMiddleware(req,res,next){
    const securedPass = await bcrypt.hash(myPass,saltRounds)

    req.body={pass:securedPass};
    next()
}

async function verifyPassword(req,res,next){
    const result = await bcrypt.compare(galatPass,req.body.pass);
    req.body={
        enteredPass:galatPass,
        hashedPass:req.body.pass,
        result:result
    };
    next();
}



//compare method is used to compare normal pass with encForm of pass

module.exports = routes;