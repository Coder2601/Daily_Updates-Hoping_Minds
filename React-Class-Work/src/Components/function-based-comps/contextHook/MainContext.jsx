import React, { createContext, useState } from 'react'
import CompA from './CompA';
import CompB from './CompB';
import CompC from './CompC';
export const myContext = createContext();

const MainContext = (props) => {
    const[count,setCount] = useState(0);
    const[msg,setMsg] = useState('Hello')
  return (
    <myContext.Provider value={{count,msg,setCount, setMsg}}>
       {props.children}
    </myContext.Provider>
  )
}

export default MainContext