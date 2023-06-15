import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxCounter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter)


  return (
    <div>
      <hr />
      <button onClick={() => dispatch({ type: 'OUT' })}>Logout</button>
      <br />
      <h2>ReduxCounter</h2>

      <button onClick={() => dispatch({ type: 'INC' })}>+</button>

      <p>Count : {count} </p>

      <button onClick={() => dispatch({ type: 'DEC' })}>-</button>
    </div>
  )
}

export default ReduxCounter