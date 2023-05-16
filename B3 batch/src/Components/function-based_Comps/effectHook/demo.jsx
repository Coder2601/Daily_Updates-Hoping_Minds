// import React, { useState, useRef } from 'react'

// const Demo = () => {
//     const [inputValue, setInputValue] = useState(10);
//     let count = useRef(0);


//     return (
//         <>

//             <input
//                 type="text"
//                 ref={count}
//                 onChange={() => {
//                     console.log(count.current.value); setInputValue(count.current.value)}}
//             />
            
//             <p>{inputValue}</p>
//         </>
//     )
// }

// export default Demo


import React, { useState, useCallback } from 'react'

const functionsSet = new Set();

const Counter = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])
  
  const decrement = useCallback(() => {
    setCount(count - 1)
  }, [count])
  
  const incrementOtherCounter = useCallback(() => {
    setCount2(count2 + 1)
  }, [count2])
  
  functionsSet.add(increment)
  functionsSet.add(decrement)
  functionsSet.add(incrementOtherCounter)
  
  console.log(functionsSet)

  return (
    <>
      Count: {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
    </>
  )
}
export default Counter