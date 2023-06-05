import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleDec, handleInc, handleMul12, handleMul30 } from './actions/counterActions';
import { handleLogout } from './actions/loginActions';

const ReduxCounter = () => {
    const score = useSelector((state)=>{console.log(state);return state.counter});

    const dispatch = useDispatch();
  return (
    <div>
        <h2>ReduxCounter</h2> 
        <button onClick={()=>dispatch(handleLogout())}>Logout</button>
        <hr />
        <p>Value : {score} </p>
        <hr />
        <button onClick={()=>dispatch(handleInc())}>+</button> &nbsp;&nbsp;
        <button onClick={()=>dispatch(handleDec())}>-</button> &nbsp;&nbsp;
        <button onClick={()=>dispatch(handleMul12())}>x12</button> &nbsp;&nbsp;
        <button onClick={()=>dispatch(handleMul30())}>x30</button>
    </div>
  )
}

export default ReduxCounter