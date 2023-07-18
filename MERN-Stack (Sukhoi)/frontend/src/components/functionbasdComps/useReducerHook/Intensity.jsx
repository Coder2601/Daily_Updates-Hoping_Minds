import React, { useReducer } from 'react'
import './intensity.css'

const Intensity = () => {

    const reducer=(state,action)=>{
        switch(action.type){
            case 'UP':{
                switch(state){
                    case 'OFF': return state = 'LOW';
                    case 'LOW': return state = 'MEDIUM';
                    case 'MEDIUM': return state= 'HIGH';
                    case 'HIGH': return state = 'VERY HIGH';
                    default: return state;
                }
            };
            case 'DOWN':{
                switch(state){
                    case 'VERY HIGH': return state = 'HIGH';
                    case 'LOW': return state = 'OFF';
                    case 'MEDIUM': return state= 'LOW';
                    case 'HIGH': return state = 'MEDIUM';
                    default: return state;
                }
            };
            default : return state;
        }
    }

    const[state,dispatch] = useReducer(reducer, 'OFF');



  return (
    <div className={state=='HIGH'?'high':state=='LOW'?'low':state=='VERY HIGH'?'veryHigh':state=='MEDIUM'?'med':state=='LOW'?'low':'off'}>
        <button onClick={()=>dispatch({type:'UP'})}>Up</button>
        <p>Intensity: {state}</p>
        <button onClick={()=>dispatch({type:'DOWN'})}>Down</button>
    </div>
  )
}

export default Intensity