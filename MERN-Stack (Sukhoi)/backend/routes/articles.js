const express = require("express");
const routes = express.Router();
let articles=require("../data").Articles;
const jwt = require("jsonwebtoken");
require("dotenv").config();

routes.get('/readArt', verifyToken, (req,res)=>{
    let id = req.user.id;

    const article = articles.filter(art=>art.id === id);
    let date = new Date();
    let timeS = date.getSeconds();
    let timeM = date.getMinutes();

    if(!article.length<1){
        res.send({msg:'ACCESS GRANTED', data: article,time:`${timeM}:${timeS}`});
    }else{
        res.send({msg:'ACCESS GRANTED', data: 'No articles for this user!', time:`${timeM}:${timeS}`});
    }
})

function verifyToken(req,res,next){
    // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzA1LCJuYW1lIjoiWWFtaSIsInBhc3N3b3JkIjoidDVnbm5oeWciLCJlbmNQYXNzIjoiJDJiJDA1JDcvZEpFWlZ6anc2OUhvL1RNYklxVC4ucXJyZGVYdnVPeFRVQlo2dVh2eXNnanpKUUQzaDF1IiwiaWF0IjoxNjg5NTkxMjc3fQ.aycWUWzs1ChtD13OPgyD8kwgaTeqM8pL4VPUj5eMKQA

    let authHeaders = req.headers.authorization;
    let token = authHeaders && authHeaders.split(' ')[1];
    console.log(token);

    jwt.verify(token, process.env.ACCESS_TOKEN_SK,(err,data)=>{
        if(err){
            res.send({error : err})
        }else{
            req.user = data;
            next();
        }
    });


}


// routes.post('/addArticle',(req,res)=>{
//     let id = articles.length+1;
//     let data = req.body;
//     let dateAdded = new Date();

//     const finalData = {
//         id:id,
//         ...data,
//         date:dateAdded
//     }
//     articles = [...articles, finalData]

//     res.send({msg:'Article Added!', article:finalData})
// })

// routes.get('/',(req,res)=>{
//     res.send(articles)
// })

module.exports = routes