//sign -> create signature(token)
//verify -> verify the token's scurity key


const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const routes = express.Router();

const users=[
    {
        id:101,
        name:'Divya',
        pass:"829tYd",
        article:"Hello to Divya Goyal...! :)"
    },
    {
        id:201,
        name:'Manav',
        pass:"875utr",
        article:"Welcome to Manav's Mysterious World.. *-*"
    }
]

routes.post('/login',(req,res)=>{
    let userdata = req.body;
    const user = users.filter(user=>user.name == userdata.name && user.pass == userdata.pass)
    
    if(user.length==0){
        res.send('user does not exist or maybe you entered wron creds')
    }
    else{
        const accessToken = jwt.sign(userdata,process.env.ACCESS_TOKEN_SECURITY_KEY);
        res.send({yourToken: accessToken});
    }
})


routes.get('/getArticle',verification,(req,res)=>{
    const id = req.user.id;
    const loggedUser = users.filter(user=>user.id == id);
    res.send({user:loggedUser})

})


function verification(req,res,next){
    //token in authorization header of request - divya (data)
    // const token = req.headers.authorization.split(' ')[1]

    const authHeaders = req.headers.authorization
    const token = authHeaders && authHeaders.split(' ')[1];

    jwt.verify(token,process.env.ACCESS_TOKEN_SECURITY_KEY,(err,payload)=>{
        if(err) res.send(err).status(403);
        else{
            req.user = payload;
            next();
        }
    })
}


module.exports = routes