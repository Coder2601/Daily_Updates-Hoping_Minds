const express = require('express');

const routes = express.Router();

const users = [
    {
        id:'user101',
        name:'Manav',
        gender:'Male'
    },
    {
        id:'user102',
        name:'Rohan',
        gender:'Male'
    },
    {
        id:'user201',
        name:'Reena',
        gender:"Female"
    }
]

routes.get('/',(req,res)=>{
    res.json({clients:users})
});

routes.post('/addUser',(req,res)=>{
    const data = req.body;
    // console.log(data);
    users.push(data);
    res.status(200).json({newUsers:users})
})




module.exports = routes;