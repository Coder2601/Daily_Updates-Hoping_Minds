import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
export const countContext = createContext();

const CounterContext = (props) => {
    const[count,setCount] = useState(10);
  return (
    <countContext.Provider value={{count, setCount}}>
        {props.children}
    </countContext.Provider>
  )
}

export default CounterContext