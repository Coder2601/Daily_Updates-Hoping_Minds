const express = require("express")
const routes = express.Router();

let blogs = [
    {
        id:1,
        title:'Movie',
        body:'RRR',
        author:'SS Rajmouli'
    },
    {
        id:2,
        title:'Song',
        body:'Gulabi Aankhein',
        author:'Sanam Puri'
    },
    {
        id:3,
        title:'Movie',
        body:'Bahubali',
        author:'SS Rajmouli'
    },
    {
        id:4,
        title:'Song',
        body:'Nit Nit',
        author:'Jasleen Royal'
    }
]

routes.get('/getBlog',(request,response)=>{
    response.send({allBlogs:blogs});
})
routes.get('/myBlog',(req,res)=>{
    res.json({
        title:'Movie',
        body:'RRR',
        author:'SS Rajmouli'
    });
})

//post request to create another blog
routes.post('/createPost/:id',(req,res)=>{
    const data = req.body;
    const blogId = req.params.id;
    let reqData = {
        id:blogId,
        ...data
    };

    if(blogId > blogs.length){
        blogs.push(reqData);
        res.status(200).send(blogs);
    }else{
        res.status(400).send('Kindly check your blog Id')
    }

    
})



module.exports = routes;