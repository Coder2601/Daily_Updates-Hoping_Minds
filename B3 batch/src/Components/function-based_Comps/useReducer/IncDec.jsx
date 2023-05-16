import React, { useReducer } from 'react'

const IncDec = () => {
    const reducer=(state,action)=>{
        if(action.type==='INC'){
            return state+1;
        }
        else if(action.type==='DEC'){
            return state-1;
        }
    }
    const[state,dispatch] = useReducer(reducer,0)
  
    const handleInc=()=>{
        dispatch({
            type:'INC'
        })
    }
    const handleDec=()=>{
        dispatch({
            type:'DEC'
        })
    }
    return (
        <>
        <button onClick={handleInc}>Increase</button> 
        <h2>Count = {state}</h2>
        <button onClick={handleDec}>Decrease</button> 
        </>
    )
}

export default IncDec