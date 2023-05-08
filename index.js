const express = require('express');
const cors= require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const Model = require('./model/logRegmodel')
const PORT = 5050;

const app= express();
app.use(express.json());
app.use(cors())


mongoose.connect(process.env.Database_Url)
// .then(()=>console.log('DB Connected'))
// .catch((error)=>console.log(error))

const db = mongoose.connection

db.on('error',(error)=>{
    console.log(error);
})
db.once('connected',()=>console.log('DB Connected..'))

app.get('/',(req,res)=>{
    res.send('Server is running happily..!')
})


app.post('/register',async(req,res)=>{
    let {username, password} = req.body;
    // res.json(user);


    try {
        const newUser = new Model({
            username:username,
            password:password
        })
        const result = await newUser.save()
        res.send(result);
        
    } catch (error) {
        res.send(error)
    }
})








app.listen(PORT, ()=>console.log(`Server running at Port : ${PORT}`))