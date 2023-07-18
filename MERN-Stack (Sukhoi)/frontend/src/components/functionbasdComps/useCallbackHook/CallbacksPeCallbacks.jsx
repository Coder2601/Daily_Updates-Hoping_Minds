import React, { useCallback, useState } from 'react'
import '../../../style/style.css'
const functionSet = new Set();

const CallbacksPeCallbacks = () => {
    const[count, setCount] = useState(10);
    const [text, settext] = useState('Hello World');
    const[styleClass, setStyleClass] = useState('previousClass')

// useCallback (callback, dependency Array of states)
//optimization, renders the memoized callbacks depending upon their input changes

    const handleCount=useCallback(()=>{
        setCount(count*2)
    },[count])

    const handleText=useCallback(()=>{
        settext(`Count changed to ${count}`)
    },[text,count])

    const handleTheme = useCallback(()=>{
        setStyleClass('nextClass')
    },[styleClass])

    functionSet.add(handleCount);
    functionSet.add(handleText);
    functionSet.add(handleTheme);

    console.log(functionSet);

  return (
    <div className={count>40 ? 'previousClass':styleClass}>
        <p>Count = {count}</p>
        <button onClick={handleCount}>Change Count</button>
        
        <hr />
        <h2 onMouseLeave={handleText}>{text}</h2>

        <hr />
        <button onClick={handleTheme}>Change theme</button>

    </div>
  )
}

export default CallbacksPeCallbacks