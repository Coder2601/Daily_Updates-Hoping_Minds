const express = require('express');

const server = express();
const PORT = 5000;
const blogRoute = require('./Routes/blogRoutes');
const articleRoute = require("./Routes/articles")
server.use(express.json());

server.get('/',(request,response)=>{
    response.send('Server running successfully')
})

//defining path to access routes in blog file
server.use('/demoApp/blogs',blogRoute);

//defining path to access routes in article file
server.use('/demoApp/articles',articleRoute);


server.listen(PORT,()=>console.log(`Server is running at port: ${PORT}`))



























































































// const http = require('http');
// const PORT = 8080;

// const server = http.createServer((request, response)=>{
//     response.write('Server working successfully..');
//     response.end('\n server stopped!');
// });

// server.listen(PORT,()=>console.log(`Server running at Port: ${PORT}`))