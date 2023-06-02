import React from 'react'
import { useDispatch } from 'react-redux'

const ReduxLogin = () => {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=>dispatch({type:'IN'})}>Login</button>

    </div>
  )
}

export default ReduxLogin