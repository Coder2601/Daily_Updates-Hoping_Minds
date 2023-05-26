import React, { useReducer, useState } from 'react'

const KeypadLock = () => {
    //A12B3C

    const [score, setScore] = useState(0);
    const reducer=(state,action)=>{
        switch(action.type){
            case 'CHECK':{
                switch(score){
                    case 0:{
                        if(action.payload=='A'){
                            setScore(score+1);    
                            return 'Stage 1'
                        }
                        else {
                            setScore(0);
                            return 'Stage 0'
                        }
                    }
                    case 1:{
                        if(action.payload=='1'){
                            setScore(score+1);    
                            return 'Stage 2'
                        }
                        else {
                            setScore(0);
                            return 'Stage 0'
                        }
                    }
                    case 2:{
                        if(action.payload=='2'){
                            setScore(score+1);    
                            return 'Stage 3'
                        }
                        else {
                            setScore(0);
                            return 'Stage 0'
                        }
                    }
                    case 3:{
                        if(action.payload=='B'){
                            setScore(score+1);    
                            return 'Stage 4'
                        }
                        else {
                            setScore(0);
                            return 'Stage 0'
                        }
                    }
                    case 4:{
                        if(action.payload=='3'){
                            setScore(score+1);    
                            return 'Stage 5'
                        }
                        else {
                            setScore(0);
                            return 'Stage 0'
                        }
                    }
                    case 5:{
                        if(action.payload=='C'){
                            setScore(score+1);    
                            return 'Treasure Found!'
                        }
                        else {
                            setScore(0);
                            return 'Stage 0'
                        }
                    }
                }
            }
        }
    }
    const[state,dispatch] = useReducer(reducer, 'Stage 0')
  return (
    <div>
        <button onClick={()=>dispatch({type:'CHECK', payload:'A'})}>A</button>
        <button onClick={()=>dispatch({type:'CHECK', payload:'B'})}>B</button>
        <button onClick={()=>dispatch({type:'CHECK', payload:'C'})}>C</button>
        <br />
        <button onClick={()=>dispatch({type:'CHECK', payload:'1'})}>1</button>
        <button onClick={()=>dispatch({type:'CHECK', payload:'2'})}>2</button>
        <button onClick={()=>dispatch({type:'CHECK', payload:'3'})}>3</button>
        <br /><br />
        <p>Status : <b>{state}</b></p>
    </div>
  )
}

export default KeypadLock