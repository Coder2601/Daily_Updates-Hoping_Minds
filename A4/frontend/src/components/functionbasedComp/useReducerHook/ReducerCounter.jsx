import React, { useReducer } from 'react'

const ReducerCounter = () => {
    const reducer = (state,action)=>{
        switch(action.type){
            case 'INC':return state+1;
            case 'DEC':return state-1;
            default: return state;
        }
    }

    const loginReducer=(logState,action)=>{
        switch(action.type){
            case 'IN': return logState=true;
            case 'OUT': return logState = false;
            default: return logState=false
        }
    }

    const[state,dispatch] = useReducer(reducer,0);
    const[logState,logdispatch] = useReducer(loginReducer,false)

    const handleDec=()=>{
        dispatch({type:'DEC'})
    }
    const handleInc=()=>{
        dispatch({type:'INC'})
    }

  return (
    <div>
        
        {logState?<>
            <button onClick={()=>logdispatch({type:'OUT'})}>Logout</button>
        <br />
        ReducerCounter
        <br /><br />
        <button onClick={handleDec}>-</button>
        Count : {state}
        <button onClick={handleInc}>+</button>
        </>
        :
        <button onClick={()=>logdispatch({type:'IN'})}>Login</button>
        }
    </div>
  )
}

export default ReducerCounter