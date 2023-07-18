// creating a server using express
const express = require('express')

//define the requests and send responses using this [server object]
const server = express();
const PORT = 5050;
const users = require('./routes/userRoutes');
// const articles = require("./routes/articles");
const emps = require('./routes/employees')

server.use(express.json());

server.get('/', (request,response)=>{
    response.send({message:'Hello from server..!'}).status(200)
})

server.use('/users',users);
// server.use('/articles',articles);
server.use('/emps',emps)

server.listen(PORT,()=>console.log(`Server is running on port no : ${PORT}`))


// Middlewares : functions that are executed between request and response cycles
// we can add multiple or single middleware
// 3 params : req, res, next