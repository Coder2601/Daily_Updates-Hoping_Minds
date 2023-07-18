import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserDetailsAPI = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        async function fetchApi() {
            const data = axios.get('https://jsonplaceholder.typicode.com/posts')
            let postArray = (await data).data;
            console.log(postArray);
            setPosts([...posts,...postArray]);

            //GET, PUT, POST, PATCH, DELETE, HEAD, OPTIONS - HTTP Requests
        }

        fetchApi();

    },[])


    return (
        <div>
            <h2>Get Post Details using API</h2>
            {posts.length === 0?
            <h3>No Posts to display</h3>
            :
            posts.map(post=>{
                return(
                    <div>
                        <p>{post.id}</p>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                )
            })    
        }
        {/* list rendering, useRef, useCallback */}

        </div>
    )
}

export default UserDetailsAPI