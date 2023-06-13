import React, { useCallback, useState } from 'react'
const functionSet = new Set();

const Multiplier = () => {
    const[count,setCount] = useState(5);
    const[operation,setOperation] = useState('None');
    const[counter,setCounter] = useState(1);

    const handleTwoTimes=useCallback(()=>{
        setCount(count*2);
        setOperation('Two Times')
    },[operation])

    const handleFiveTimes=useCallback(()=>{
        setCount(count*5);
        setOperation('Five Times')
    },[operation])

    const handleTwelveTimes=useCallback(()=>{
        setCount(count*12);
    },[count])

    const handleThirtyTimes=useCallback(()=>{
        setCount(count*30);
    },[count])

    const handleInc=useCallback(()=>{
        setCounter(counter+1);
    },[counter])

    functionSet.add(handleFiveTimes);
    functionSet.add(handleThirtyTimes);
    functionSet.add(handleTwelveTimes);
    functionSet.add(handleTwoTimes);
    functionSet.add(handleInc);

    console.log(functionSet);


  return (
    <div>
        Multiplier
        <p>Operation: {operation} </p>
        <p>Result: {count} </p>
        <button onClick={handleTwoTimes}>x2</button>&nbsp;&nbsp;
        <button onClick={handleFiveTimes}>x5</button>&nbsp;&nbsp;
        <button onClick={handleTwelveTimes}>x12</button>&nbsp;&nbsp;
        <button onClick={handleThirtyTimes}>x30</button>
        <br />
        <div>
            <p>Counter : {counter}</p>
            <button onClick={handleInc}>Increase by 1</button>
        </div>
    </div>
  )
}

export default Multiplier