import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const ReduxComponent = () => {
    const count = useSelector(state=>state.counter)
    const isLogin = useSelector(state=>state.logged);

    const dispatch = useDispatch();

  return (
    <div>
        <p>Count : {count} </p>
        
        <button onClick={()=>dispatch({type:'INC',payload:1})}>+</button>
        <button onClick={()=>dispatch({type:'DEC',payload:1})}>-</button>
        <br/><br/>
        {isLogin? <h2>Confidential Data</h2>:null}
        <br/>
        <button onClick={()=>dispatch({type:'IN'})}>Login</button>
        <button onClick={()=>dispatch({type:'OUT'})}>Logout</button>
    </div>
  )
}

export default ReduxComponent