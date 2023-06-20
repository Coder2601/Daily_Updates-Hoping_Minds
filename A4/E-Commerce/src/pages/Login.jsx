import React from 'react'

const Login = ({signIn}) => {
  return (
    <div>
      Login
      <br />
      <button onClick={()=>signIn(true)}>Login</button>
    </div>
  )
}

export default Login