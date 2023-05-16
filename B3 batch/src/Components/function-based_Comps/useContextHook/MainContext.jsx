import React, { useState } from 'react'

export const fullContext = React.createContext();

function MainContext(props) {
    const[count,setCount] = useState(0);

    const handleInc=()=>{
     setCount(count+1)   
    }
    const handleDec=()=>{
        setCount(count-1)   
    }

    const myC = {
        border:'2px solid black'
    }

    return (
        <div style={myC}>
    <fullContext.Provider value={{count, handleDec,handleInc}}>
        {props.children}
    </fullContext.Provider>
    </div>
  )
}

export default MainContext