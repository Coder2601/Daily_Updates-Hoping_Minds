import React, { useReducer, useState } from 'react'
const DemoReducer = () => {

    const reducer=(state,action)=>{
        switch(action.type){
            case 'INC': return state+1;
            case 'DEC': return state-1;
            case 'CLR': return state=0;
            default: return state
        }
    }
    const[count,dispatch] = useReducer(reducer, 0);

  return (
    <div>
        <h2>Count:{count}</h2>
        <button onClick={()=>dispatch({type:'INC'})}>+</button>
        <button onClick={()=>dispatch({type:'DEC'})}>-</button>
        <button onClick={()=>dispatch({type:'CLR'})}>Clear</button>
    </div>
  )
}
export default DemoReducer