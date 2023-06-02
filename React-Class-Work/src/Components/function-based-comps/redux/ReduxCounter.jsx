import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxCounter = () => {
    const score = useSelector((state)=>{console.log(state);return state.counter});

    const dispatch = useDispatch();
  return (
    <div>
        <h2>ReduxCounter</h2> 
        <button onClick={()=>dispatch({type:'OUT'})}>Logout</button>
        <hr />
        <p>Value : {score} </p>
        <hr />
        <button onClick={()=>dispatch({type:'INC'})}>+</button> &nbsp;&nbsp;
        <button onClick={()=>dispatch({type:'DEC'})}>-</button> &nbsp;&nbsp;
        <button onClick={()=>dispatch({type:'MUL12'})}>x12</button> &nbsp;&nbsp;
        <button onClick={()=>dispatch({type:'MUL30'})}>x30</button>
    </div>
  )
}

export default ReduxCounter