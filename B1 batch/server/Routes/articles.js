const express = require('express');
const routes = express.Router();

let articles = [];

routes.get('/', (req, res) => {
    res.send(articles);
});

routes.post('/addArticle', (req, res) => {
    let id = articles.length + 1;
    let date = new Date();
    let data = req.body;
    const newArticle = {
        id: id,
        date: date,
        ...data
    }
    articles.push(newArticle);
    res.send(articles);
})

module.exports = routes;