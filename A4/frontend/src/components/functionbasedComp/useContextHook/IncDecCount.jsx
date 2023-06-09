import React, { useContext } from 'react'
import { countContext } from './context/CounterContext'

const IncDecCount = () => {
    const{count, setCount} = useContext(countContext);
  return (
    <div>
        <h2>Increment / Decrement Count</h2>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
    </div>
  )
}

export default IncDecCount