const express = require('express');


const server = express();
const PORT = 8000;
const clientRoute = require('./Routes/userRoutes');
const articles = require('./Routes/articles')
const authRoute = require('./Routes/authRoutes')
const loginAuth = require('./Routes/loginAuth');

//allows us to send and receive json data
server.use(express.json())

server.get('/',(request,response)=>{
    response.send('Welcome aboard')
});


server.use('/api/auth',authRoute);
server.use('/api',loginAuth);
server.use('/api/users',clientRoute);
server.use('/api/article',articles);



//Middleware examples
// server.use('/',sup);

// function sup(req,res,next){
//     console.log('sup');
//     next();
// }
// function how(req,res,next){
//     console.log('how');
//     next()
// }

server.listen(PORT,()=>console.log(`Server is running at port ${PORT}`))