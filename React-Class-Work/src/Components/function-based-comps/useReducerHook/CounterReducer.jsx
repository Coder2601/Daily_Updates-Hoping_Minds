import React, { useReducer } from 'react'

const CounterReducer = () => {

  const pointsreducer=(points, action)=>{
    if(action.type=='INC'){
      return points+action.payload;
    }
    else if(action.type=='DEC'){
      return points-action.payload;
    }
    else{
      return points;
    }
  }

  const[points,dispatch] = useReducer(pointsreducer,0)

  return (
    <div>
        <button onClick={()=>{dispatch({type:'DEC', payload:2})}}>-</button>
        
        <p style={{display:'inline'}}>Count : {points} </p>
        
        <button onClick={()=>{dispatch({type:'INC', payload:3})}}>+</button>
    </div>
  )
}

export default CounterReducer