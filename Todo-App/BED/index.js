const express = require('express');
const mongoose = require('mongoose');
//importing cors - Cross-Origin Resource Sharing
const cors = require('cors');
require('dotenv').config();
const data = require('./data')


const app = express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Server running successfully..')
})

app.get('/showPost',(req,res)=>{
    res.send(data);
})

app.post('/addTitle',(req,res)=>{
    let xx = req.body;
    res.send(xx);
    // console.log(xx);

    data.push(xx);
    console.log(data);
})


app.listen(5000,()=>console.log('Server running at Port:5000'));