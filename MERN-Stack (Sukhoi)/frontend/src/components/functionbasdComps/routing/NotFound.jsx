import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const nav = useNavigate()
    // returns us a function, which takes path as an argument
  return (
    <div>
        <hr />
        <h2>Page Not Found</h2>
        <hr />
        <h3>OOPS..!!</h3>
        <h4>Error: 404</h4>
        <p>Happy Hacking</p>
        <button onClick={()=>nav('/')}>Go to Home Page</button>
        <hr />
    </div>
  )
}

// amazon.com/grocery/oil -> cooking oil options will appear
// amazon.com/oil -> all types of oil categories will appear


// hostname:port/courses/backend
// hostname:port/backend

export default NotFound