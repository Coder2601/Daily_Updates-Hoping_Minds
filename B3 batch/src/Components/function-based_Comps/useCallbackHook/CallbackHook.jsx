import React, { useCallback, useState } from 'react'
const functionSet = new Set();

function CallbackHook() {
    
    const [count,setCount] = useState(0);
    const[count2,setCount2] = useState(55);

    const handleInc=useCallback(()=>{
        setCount(count+1)
    },[count,count2])

    const handleDec=useCallback(()=>{
        setCount(count-1)
    },[count2])

    const handleClear=useCallback(()=>{
        setCount2(count2-1)
    },[count2])

    functionSet.add(handleInc);
    functionSet.add(handleDec);
    functionSet.add(handleClear);

    

  return (
    <div>
        {console.log(functionSet)}
        <h2>Count : {count}</h2>
        
        <button onClick={handleInc}>Increase</button>
        <br/>
        <button onClick={handleDec}>Decrease</button>
        <br/>
        <h2>Count 2 : {count2}</h2>
        <button onClick={handleClear}>Clear</button>
    </div>
  )
}

export default CallbackHook