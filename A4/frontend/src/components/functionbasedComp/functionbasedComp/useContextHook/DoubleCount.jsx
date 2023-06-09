import React, { useContext } from 'react'
import { countContext } from './context/CounterContext'

const DoubleCount = () => {
    const{count} = useContext(countContext)
  return (
    <div>
        <h2>DoubleCount</h2>
        <p>Double = {2*count}</p>
    </div>
  )
}

export default DoubleCount