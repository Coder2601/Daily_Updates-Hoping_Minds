import React, { useReducer, useState } from 'react'

const RoomIntensity = () => {
    const[count, setCount] = useState(1);

    const reducer=(levels, action)=>{
        switch(action.type){
            case 'Increase':{
                switch(count){
                    case 1:setCount(count+1);return 'LOW'
                    case 2: setCount(count+1);return 'MEDIUM';
                    case 3: setCount(count+1);return 'HIGH';
                    default: return levels;
                }
            }
            case 'Decrease':{
                switch(count){
                    case 2:setCount(count-1);return 'OFF';
                    case 3: setCount(count-1);return 'LOW';
                    case 4: setCount(count-1);return 'MEDIUM';
                    default: return levels;
                }
            }
        }
    }
    const[levels,dispatch] = useReducer(reducer, 'OFF');
  return (
    <div>
        <button onClick={()=>dispatch({type:'Decrease'})}>Decrease</button>
        <p>Intensity : {levels}</p>
        <button onClick={()=>dispatch({type:'Increase'})}>Increase</button>
    </div>
  )
}

export default RoomIntensity