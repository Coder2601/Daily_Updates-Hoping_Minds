import React, { useContext } from 'react'
import { countContext } from './context/CounterContext'

const DisplayCount = () => {
    const{count} = useContext(countContext)
  return (
    <div>
        <h2>DisplayCount</h2>
        <p>Count = {count}</p>
    </div>
  )
}

export default DisplayCount