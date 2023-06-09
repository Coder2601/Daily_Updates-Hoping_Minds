import React, { useContext } from 'react'
import { countContext } from './context/CounterContext'

const CountTable = () => {
  const { count } = useContext(countContext);
  const arr=[1,2,3,4,5,6,7,8,9,10];

  return (
    <div>
      <h2>Count Table</h2>
      <p>{arr.map(item=>{
        return(
          <p>{count} x {item} = {count*item}</p>
        )
      })}</p>
    </div>
  )
}
export default CountTable