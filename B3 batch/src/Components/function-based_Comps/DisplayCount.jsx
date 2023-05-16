import React from 'react'
import { useSelector } from 'react-redux'

const DisplayCount = () => {
    const val = useSelector(state=>state.counter)
  return (
    <div>
        POINTS = {val*2}
    </div>
  )
}

export default DisplayCount