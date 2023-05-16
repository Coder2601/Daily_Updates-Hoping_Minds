import React, { useContext } from 'react'
import { fullContext } from './MainContext'

function Display() {
    const{count} = useContext(fullContext)
  return (
    <div>
        <h2>Count = {count}</h2>
    </div>
  )
}

export default Display