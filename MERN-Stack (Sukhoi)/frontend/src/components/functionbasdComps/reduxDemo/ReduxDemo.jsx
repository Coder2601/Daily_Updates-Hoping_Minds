import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxDemo = () => {
    const count = useSelector(state=>state.count);
    const dispatch = useDispatch();

  return (
    <div>
        <h2>Redux Demo</h2>
        <br />
        <button onClick={()=>dispatch({type:'INC',payload:5})}>+</button>
        <p>Count : {count}</p>
        <button onClick={()=>dispatch({type:'DEC', payload:2})}>-</button>
    </div>
  )
}

export default ReduxDemo

//Create a list of cars/ fruits and take input from user to add new car or fruit to the list and display updated list on the screen