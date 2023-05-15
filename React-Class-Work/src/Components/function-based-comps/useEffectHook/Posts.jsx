import React, { useEffect } from 'react'
import axios from 'axios'

const Posts = () => {
    
    useEffect(()=>{
        async function getPost (){
            const result = await fetch('https://jsonplaceholder.typicode.com/posts');

            console.log(await result.json());
        };
   
        getPost();

    },[]);

  return (
    <div>Posts</div>
  )
}

export default Posts

// https://jsonplaceholder.typicode.com/posts