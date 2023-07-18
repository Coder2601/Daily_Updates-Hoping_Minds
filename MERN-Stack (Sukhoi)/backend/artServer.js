const express = require('express');
const server = express();
const articles = require('./routes/articles')

server.use(express.json());

server.use('/ThiefArt',articles);


server.listen(7000,()=>console.log("Thief's Server running at 7000"))