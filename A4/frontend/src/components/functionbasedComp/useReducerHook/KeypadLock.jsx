import React, { useReducer, useState } from 'react'

const KeypadLock = () => {
    const [counter,setCounter] = useState(0);

    const reducer=(state,action)=>{
        switch(action.type){
            case 'Check':{
                switch(action.payload){
                    case 'X':{
                        if(counter===4){
                            return state='Access Granted..!'
                        }else{
                            setCounter(0);
                            return state='Restart'
                        }
                    };
                    case 'A':{
                        if(counter===3){
                            setCounter(counter+1)
                            return state='****'
                        }else{
                            setCounter(0);
                            return state='Restart'
                        }
                    };
                    case 'P':{
                        if(counter===1){
                            setCounter(counter+1)
                            return state='**'
                        }else{
                            setCounter(0);
                            return state='Restart'
                        }
                    };
                    case '5':{
                        setCounter(0);
                        return state='Restart'
                    };
                    case '3':{
                        if(counter===2){
                            setCounter(counter+1)
                            return state='***'
                        }else{
                            setCounter(0);
                            return state='Restart'
                        }
                    };
                    case '8':{
                        if(counter===0){
                            setCounter(counter+1)
                            return state='*'
                        }else{
                            setCounter(0);
                            return state='Restart'
                        }
                    };
                }

            };
            default: return state='Try Again'
        }
    }

    const[state,dispatch] = useReducer(reducer,'Begin Now')

  return (
    <div>
        {/* 8P3AX */}
        KeypadLock
        <br />
        <p>Status : {state} </p>
        <button onClick={()=>{dispatch({type:'Check',payload:'X'})}}>X</button>
        <button onClick={()=>{dispatch({type:'Check',payload:'A'})}}>A</button>
        <button onClick={()=>{dispatch({type:'Check',payload:'P'})}}>P</button>
        <br /><br />
        <button onClick={()=>{dispatch({type:'Check',payload:'5'})}}>5</button>
        <button onClick={()=>{dispatch({type:'Check',payload:'3'})}}>3</button>
        <button onClick={()=>{dispatch({type:'Check',payload:'8'})}}>8</button>
    </div>
  )
}

export default KeypadLock