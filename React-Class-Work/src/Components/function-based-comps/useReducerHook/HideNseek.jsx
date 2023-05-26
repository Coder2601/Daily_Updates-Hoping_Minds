import React, { useReducer } from 'react'

const HideNseek = () => {
    const reducer=(state,action)=>{
        switch(action.type){
            case 'SHOW':
                return state='Confidential Data';
            case 'HIDE':
                return state='No data to display'
        }
    }

    const[state, dispatch] = useReducer(reducer, 'Loading..');

  return (
    <div>
        <button onClick={()=>dispatch({type:'SHOW'})}>Show</button>

        <p>{state}</p>
        
        <button onClick={()=>dispatch({type:'HIDE'})}>Hide</button>
    </div>
  )
}

export default HideNseek