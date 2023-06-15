import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Multiplier = () => {
    const dispatch = useDispatch();
    const result = useSelector(state=>state.counter);
  return (
    <div>
        <hr />
        <h2>Multiplier</h2>
        <p>Result : <b>{result}</b></p>

        <button onClick={()=>dispatch({type:'MUL',payload:12})}>x12</button>
        <button onClick={()=>dispatch({type:'MUL',payload:0})}>x0</button>
        
        <br /><br />

        <button  onClick={()=>dispatch({type:'DIV',payload:2})}>/2</button>
        <button  onClick={()=>dispatch({type:'DIV',payload:4})}>/4</button>
    </div>
  )
}

export default Multiplier