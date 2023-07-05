const express = require('express');
const routes = express.Router();

let clients=[
    {
        id:1,
        name: "Priya",
        age: 80,
        gender: "Female"
      },
      {
        id:2,
        name: "Priya",
        age: 20,
        gender: "Female"
      },
      {
        id:3,
        name: "Isha",
        age: 80,
        gender: "Female"
      },
      {
        id:4,
        name: "Himani",
        age: 20,
        gender: "Female"
      },
      {
        id:5,
        name: "Usha",
        age: 80,
        gender: "Female"
      }
];

routes.post('/addUser',(req,res)=>{
    const data = req.body;
    let newId = clients.length+1

    clients.push({id:newId,...data});
    res.send('Data created');
})

//parameters - sent via request (age is a param here)
routes.get('/getUsers/:age/:name',(req,res)=>{
    console.log(req.params.age);
    let filteredClient = clients.filter(client=>client.age == req.params.age && client.name == req.params.name)

    res.send(filteredClient)
})

routes.get('/getUsers',(req,res)=>{
    res.send(clients)
})

routes.delete('/deleteUser/:id',(req,res)=>{
    let id = parseInt(req.params.id)
    clients.splice(id-1,1)
    res.send(clients);
})

module.exports = routes