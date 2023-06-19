const express = require('express');
const authServer = express();
const PORT = 7000

const blogRoute = require('./Routes/blogs');


authServer.use('/api/blogs',blogRoute);



authServer.listen(PORT,()=>console.log(`AuthSerer running at port: ${PORT}`))