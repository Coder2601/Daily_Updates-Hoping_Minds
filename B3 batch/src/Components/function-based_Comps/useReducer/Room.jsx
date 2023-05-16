import React, {useState,useReducer} from 'react'

const Room = () => {
    
    const reducer=(state,action)=>{
        switch(action.type){
            case 'High':return 'Level 3';
            case 'Low' : return 'Level 1';
            case 'Medium' : return 'Level 2';
            case 'Off' : return 'OFF';
            default: break;
        }
    }

    const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, 'OFF')

    const handleInc=()=>{
        switch(count){
            case 0: {setCount(count+1);
                    dispatch({
                        type:'Low'
                    }); break;}
            case 1: {setCount(count+1);
                dispatch({
                    type:'Medium'
                }); break;}
            case 2: {setCount(count+1);
                dispatch({
                    type:'High'
                }); break;}
            default: break;
        }

    }
    const handleDec=()=>{
        switch(count){
            case 1: {setCount(count-1);
                    dispatch({
                        type:'Off'
                    }); break;}
            case 2: {setCount(count-1);
                dispatch({
                    type:'Low'
                }); break;}
            case 3: {setCount(count-1);
                dispatch({
                    type:'Medium'
                }); break;}
            default: break;
        }
    }
  return (
    <>
        <button onClick={handleInc}>Increase</button>
        <h2>{state}</h2>
        <button onClick={handleDec}>Decrease</button>
    </>
  )
}

export default Room