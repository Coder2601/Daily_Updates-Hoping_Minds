const express = require('express');
const routes = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require("dotenv").config();

let articles = require('../data').Articles;
let users=require('../data').Users;

const saltrounds = 5;

let refreshTokensArr = [];


// *********************ROUTES***********************

routes.get("/allUsers",(req,res)=>{
    res.send({users : users})
})

// create a new data
routes.post('/register', encryptUserDetails, (req, res) => {

    const allUserData = req.data;

    res.send({ msg: 'user registered', user: allUserData });
})

// post req to login with id n pass-> compare the pass if user exists and then grant access else deny access
routes.post("/login", authenticateUser, genToken, (req, res) => {
    let msg = 'User Logged Successfully';
    let userid = req.data.id;

    let userData = users.filter(user=>user.id === userid);

    if(userData.length<1){
        res.send({msg : "No such user found!" });
    }else{
        res.send({msg : msg, accessToken: req.data.accessToken, timeOfTokenGeneration:req.data.time,refreshToken : req.data.refreshToken});
    }
})

routes.post('/newToken',verifyRefToken,(req,res)=>{
    const userData = req.user;
    const token = generateAccessToken(userData);
    res.send({msg:"New token generated",accessToken:token});
})

routes.get('/getAllRefTokens',(req,res)=>{
    res.send({allRefTokens : refreshTokensArr})
})


routes.delete('/delRefToken',(req,res)=>{
    let refToken = req.body.token;

    refreshTokensArr = refreshTokensArr.filter(token=>token !== refToken);
    res.send({msg:"Token Blacklisted!"});
})


// *********************MIDDLEWARES******************

// middleware to assign encrypted password to registered user
async function encryptUserDetails(req, res, next) {
    const data = req.body;
    let pass = data.password;

    let alrUser = users.filter(user=>user.name == data.name || user.id == data.id);
    if(alrUser.length<1){
        try {
            const hashedP = await bcrypt.hash(pass, saltrounds);
    
            let userDetails = {
                ...data,
                encPass: hashedP
            }
    
            users = [...users, userDetails]
    
            req.data = users;
            next();
        } catch (error) {
            res.send('Error in Registration Process.', error);
        }
    }
    else{
        res.send("User already exists");
    }

}

// middleware to verify the encrypted pass upon login.
async function authenticateUser(req, res, next) {
    let data = req.body;

    let filteredUsers = users.filter(user => user.id == data.id);

    if (!filteredUsers.length < 1) {
        try {
            const result = await bcrypt.compare(data.password, filteredUsers[0].encPass);
            if (result) {
                req.user = filteredUsers[0];
                next();
            }
            else {
                res.send('Wrong password!!')
            }
        } catch (error) {
            res.send("Error in comparing your passwords.", error);
        }
    }
    else {
        res.send('No such user found!!')
    }
}


async function genToken(req,res,next){
    let userData = req.user;
    // console.log(userData);

    // sign -> generate the token, verify -> compare the security key of the token
    // jwt.sign(payload, sec_key , expiryTime (optional))
    const token = generateAccessToken(userData);
    const refreshToken = jwt.sign(userData, process.env.REFRESH_TOKEN_SK,{expiresIn:'2m'});
    refreshTokensArr.push(refreshToken);

    let date = new Date();
    let timeS = date.getSeconds();
    let timeM = date.getMinutes();

    req.data= {accessToken: token, id:userData.id,time:`${timeM}:${timeS}`, refreshToken : refreshToken};
    next();
}

async function verifyRefToken(req,res,next){
    let refToken = req.body.token;

    if(refreshTokensArr.includes(refToken)){
        jwt.verify(refToken,process.env.REFRESH_TOKEN_SK,(err,data)=>{
            if(err) res.send({msg : "Error in validating Refresh Token", error: err})
            else {
                req.user = data;
                next();
            }
        })
    }else{
        res.send({msg:"This token does not exist!!"});
    }
}

function generateAccessToken(data){
    return token = jwt.sign({id:data.id},process.env.ACCESS_TOKEN_SK,{expiresIn:'30s'});
}


module.exports = routes;