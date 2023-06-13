import React, { useReducer, useState } from 'react'

const Intensifier = () => {
    const[counter,setCounter] = useState(0);

    const reducer=(state,action)=>{
        switch(action.type){
            case 'INC':{
                switch(counter){
                    case 0: setCounter(counter+1);return state='LOW';
                    case 1: setCounter(counter+1);return state='MEDIUM';
                    case 2: setCounter(counter+1);return state='High';
                    default: return state
                    
                }
            }
            case 'DEC':{
                switch(counter){
                    case 3: setCounter(counter-1);return state='MEDIUM';
                    case 2: setCounter(counter-1);return state='LOW';
                    case 1: setCounter(counter-1);return state='OFF';
                    default: return state
                    
                }
            }
        }
    }

    const[state,dispatch] = useReducer(reducer, 'OFF');
   

  return (
    <div>
        Intensifier
        <br />
        <button onClick={()=>dispatch({type:'DEC'})}>Dec</button>
        Intensity: {state}
        <button onClick={()=>dispatch({type:'INC'})}>Inc</button>
    </div>
  )
}

export default Intensifier