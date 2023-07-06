//create a server using express and node.js

//it receive HTTP requests (GET, POST, PUT, PATCH, DELETE) and send responses(data-(string, JSON), status code-100(information),200(Success),300(Redirectional),400(FED Error),500(BED Error)) in return

//all requests are sent to perform CRUD(Create, Read, Update, Delete) operation 
//to run the server we can use "node", "nodemon"


const express = require('express');
const PORT = 8000;

//65535- maximum limit of port number
//avoid using 3000 series of port number as FED runs on it.

const server = express();
const users = require('./routes/userRoutes')
const authRoutes = require('./routes/authenticationRoute');
const tokenRoutes = require('./routes/authenticationNauthorization')
//express function returns an object(server) that is used to receive requests and send reesponses

//allows to send and receive JSON data
server.use(express.json());

server.use('/user',users)
server.use('/auth',authRoutes)
server.use('/tokenAuth', tokenRoutes)


server.get('/',(request, response)=>{
    response.send("GET request at root received").status(200);
})




server.listen(PORT,()=>console.log(`Server is running at port: ${PORT}`))