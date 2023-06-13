import React, { createContext, useState } from "react";

export const treasure = createContext();


const Confusion = (props) => {
    const[pearls,setPearls] = useState('Moti');
    const[count,setCount] = useState(10);
    const[msg,setMsg] = useState('Hello World');

  return (
    <treasure.Provider value={{count,msg}}>
        {props.children}
    </treasure.Provider>
  )
}

export default Confusion