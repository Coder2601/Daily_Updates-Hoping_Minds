const express = require('express');
const routes = express.Router();

let articles = [];

routes.get('/', (req, res) => {
    res.send(articles);
});

routes.post('/addArticle', loading, (req, res) => {
    console.log('loading done.., Middleware is executed');
})

//middleware to cause delay in adding new article
function loading(req, res, next) {
    setTimeout(() => {
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
        next();
    }, 5000);

}

//testing middlewares
function test1(req, res, next) {
    console.log('test1 Executed');
    // res.send('test1')
    next();
}
function test2(req, res, next) {
    console.log('test2 Executed');
    res.send('test2')
    next()
}
function test3(req, res, next) {
    console.log('test3 Executed');
    // res.send('test3')
}

routes.use("/middle", test1, test2, test3);

module.exports = routes;