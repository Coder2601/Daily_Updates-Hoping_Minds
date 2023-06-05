import React from 'react'
import { useDispatch } from 'react-redux'
import { handleLogin } from './actions/loginActions';

const ReduxLogin = () => {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=>dispatch(handleLogin())}>Login</button>

    </div>
  )
}

export default ReduxLogin