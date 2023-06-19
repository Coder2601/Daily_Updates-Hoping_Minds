const express = require("express");
const routes = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

let allrefreshTokens = [];

let users = [
    {
        id: "1",
        name: "Guru",
        password: "$2b$10$61ktCxXhngtjtfbJeQ3ioOymniZyNRiKs1Jo49J6ckMB5Rpw3xINe",
        actualPass:"1122"
    },
    {
        id: "2",
        name: "Dhvani",
        password: "$2b$10$rCw5XTPbz0BaPmEx3vzfwukZ8laPjVm0J99RbXb1AhQ1qyCUZqlAm",
        actualPass: "0909"
    }
];

routes.post('/register', async (req, res) => {
    let id = users.length + 1;
    try {
        let encPass = await bcrypt.hash(req.body.password, 10);
        let newUser = {
            id: id,
            name: req.body.name,
            password: encPass,
            actualPass : req.body.password
        }
        users.push(newUser)
        res.send({ msg: 'Registered Successfully', users: users })
    } catch (error) {
        res.send(error)
    }
})

routes.post('/login', async(req, res) => {
    let id = req.body.id;
    let pass = req.body.password;

    const user = users.find(user=>user.id === id)
    // console.log(user);
    if(user!== undefined){
        const result = await bcrypt.compare(pass,user.password);
        console.log(result);
        if(result){

            const accessToken = generateAccessToken(user)
            let refreshToken = jwt.sign(user,process.env.Refresh_Security_Key);
            allrefreshTokens.push(refreshToken);
            
            res.send({
                msg:'Login success',
                authToken:accessToken,
                refreshToken:refreshToken
            });

        }else{
            res.send('Login Falied')
        }
    }else{
        res.send('User not found');
    }
    // res.send('Looking for user')
})

routes.post('/newToken',(req,res)=>{
    let refToken = req.body.token;
    
    jwt.verify(refToken,process.env.Refresh_Security_Key,(err,data)=>{
        if(err) res.sendStatus(403);
        else {
            let token = generateAccessToken(data)
            res.send({newAuthToken:token})
        }
    });
})


function generateAccessToken(user){
    return jwt.sign(user,process.env.Security_Key);
}


module.exports = routes