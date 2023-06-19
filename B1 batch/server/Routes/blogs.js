const express = require('express');
const routes = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();


const blogs = [
    {
        id:'1',
        title:'Movie',
        content:'RRR'
    },
    {
        id:'2',
        title:'Movie',
        content:'RAW'
    },
    {
        id:'3',
        title:'Movie',
        content:'Bhediya'
    },
    {
        id:'4',
        title:'Movie',
        content:'Tamasha'
    },
    {
        id:'5',
        title:'Movie',
        content:'Bahubali'
    }
]


routes.get('/',authMiddleware,(req,res)=>{
    let blogData = blogs.filter(blog=>blog.id===req.user.id)
    res.send({data:blogData});

})

function authMiddleware(req,res,next){
    
    let authHeaders = req.headers.authorization;
    console.log(`authHeaders : ${authHeaders}`);
    
    if(authHeaders){
        let token = authHeaders.split(' ')[1];
        console.log(`token : ${token}`);

        jwt.verify(token,process.env.Security_Key,(err,data)=>{
            if(err) res.sendStatus(403)
            else req.user = data;
        })

    }
    
    next();
}


module.exports = routes;