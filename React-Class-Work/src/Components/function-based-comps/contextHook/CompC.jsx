import React, { useContext, useState } from 'react'
import { myContext } from './MainContext'

const CompC = () => {
    const {count, setCount} = useContext(myContext)
  return (
    <div>
        <h2>CompC</h2>
        <button onClick={()=>setCount(count+1)}>+</button>

        <button onClick={()=>setCount(count-1)}> - </button>
    </div>
  )
}

export default CompC