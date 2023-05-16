import React, { useEffect, useState } from 'react'

const PracticeUseEffect = () => {
    let[time,setTime] = useState(10)
    let[isCorrect,setCorrect] = useState(0)


    useEffect(()=>{
        setTimeout(()=>{
            if(time>0){
                setTime(time-1)
            }
        },1000)
    },[time])


    const correctFun=()=>{
        setCorrect(1)
        setTime(0)
    }
    const inCorrect=()=>{
        setCorrect(2)
        setTime(0)
    }
    
  return (
     
    <>
    {isCorrect===1?<h2>Good Job</h2>:isCorrect===2?<h2>Wrong</h2>:
    <div>
        <h2>Time Left : {time}seconds </h2>
    <h3>What is React?</h3>
    <button onClick={correctFun}>Library</button>
    <button onClick={inCorrect}>FrameWork</button>
    <button onClick={inCorrect}>None of the Above</button>

    {isCorrect===1? <p>Right Answer</p>:isCorrect===2 ? <p>Wrong Answer</p>:null}
    </div>
}
    </>
  )
}

export default PracticeUseEffect