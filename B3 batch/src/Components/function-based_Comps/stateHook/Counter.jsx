import React, { useState } from 'react'
import Form from './Form';

const Counter = () => {

    let[count,setCount] = useState(0)
    console.log(count);

    const handleInc=()=>{
        setCount(count+1)
    }
    const handleDec=()=>{
        setCount(count-1)
    }

    return (

      count>=18 ?

      <Form count={count} />
      :
        <>
            <button onClick={handleDec}>Decrease</button>
            <p>Count: {count}</p>
            <button onClick={handleInc}>Increase</button>
        </>
  )
}

export default Counter