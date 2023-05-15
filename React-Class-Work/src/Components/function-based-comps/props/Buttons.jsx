import React, { useState } from 'react'
import Display from './Display'

function Buttons() {
    const[score,setScore] = useState(0)
    const handleInc=()=>setScore(score+1)
    const handleDec=()=>setScore(score-1)

  return (
    <div>
        <h2>Buttons Component</h2>
        <button onClick={handleInc}>Inc</button>
        <button onClick={handleDec}>Dec</button>
        <Display points={score} />
    </div>
  )
}

export default Buttons