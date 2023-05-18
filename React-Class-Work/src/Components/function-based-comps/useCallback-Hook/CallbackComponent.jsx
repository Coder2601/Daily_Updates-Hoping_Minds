import React, { useCallback, useState } from 'react'
let functionSet = new Set();

const CallbackComponent = () => {
    const[count1,setCount1] = useState(0);
    const[count2,setCount2] = useState(5);

    const handleChangeCount1=useCallback(()=>{
        setCount1(count1+1)
    },[count1])
    const handleChangeCount2=useCallback(()=>{
        setCount2(count2+5)
    },[count2])
    const handleClearAll=useCallback(()=>{
        setCount1(0)
        setCount2(0)
    },[])
    
    functionSet.add(handleChangeCount1);
    functionSet.add(handleChangeCount2);
    functionSet.add(handleClearAll);

  return (
    <div>
        {console.log(functionSet)}
        <div>
            <p>Count 1 = {count1} </p>
            <button onClick={handleChangeCount1}>Change 1</button>
        </div>
        <div>
            <p>Count 2 = {count2} </p>
            <button onClick={handleChangeCount2}>Change 2</button>
        </div>
        <div>
            <button onClick={handleClearAll}>Clear</button>
        </div>
    </div>
  )
}

export default CallbackComponent