const express = require("express");
const routes = express.Router();
const bcrypt = require('bcrypt')

let users = [];

routes.post('/register', async (req, res) => {
    let id = users.length + 1;
    try {
        let encPass = await bcrypt.hash(req.body.password, 10);
        let newUser = {
            id: id,
            name: req.body.name,
            password: encPass
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
            res.send('Login success');
            
        }else{
            res.send('Login Falied')
        }
    }else{
        res.send('User not found');
    }
    // res.send('Looking for user')
})

module.exports = routes