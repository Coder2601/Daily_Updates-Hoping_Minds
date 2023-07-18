const express = require('express');
const routes = express.Router();

const middl1=(req,res,next)=>{
    console.log('Middleware 1 executed..!');
    // res.send('Hii from Middleware 1');
    next();
}

const middl2=(req,res,next)=>{
    console.log('Middleware 2 executed..!');
    // res.send('Hii from Middleware 2');
    next()
}

routes.get('/',middl1,(req,res)=>{
    res.send('Callback 1')
})

routes.get('/getSpecificEmp',middl2,(req,res)=>{
    res.send('Callback 2')
})


// directly with path
routes.use('/abc', aplha, beta);
routes.use('/bca',beta);

function aplha(req,res,next){
    console.log('abc middl. executed');
    // res.send("alpha is called...");
    next();
}
function beta(req,res,next){
    console.log('bca middl. executed');
    res.send('beta is called..')
}

module.exports = routes