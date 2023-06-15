import React from 'react'
import { useDispatch } from 'react-redux'

const LoginRedux = () => {
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Login Component</h2>
        <button onClick={()=>dispatch({type:'IN'})}>Login</button>
    </div>
  )
}

export default LoginRedux