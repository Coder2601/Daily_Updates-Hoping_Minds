import React, { createContext, useState } from 'react'

export const allItemsContext = createContext();

const Storehouse = (props) => {
    const[count,setCount] = useState(10);
    const[message,setMessage] = useState('Welcome to SuperStore');

    const contextValue = {
        count,
        message
    }

  return (
        <allItemsContext.Provider value={contextValue}>
        {props.children}
        </allItemsContext.Provider>
  )
}

export default Storehouse