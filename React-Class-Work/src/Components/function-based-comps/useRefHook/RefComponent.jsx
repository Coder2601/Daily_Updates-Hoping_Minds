import React, { useRef } from 'react'

const RefComponent = () => {
    const name = useRef('');
    const handleInputChange=()=>{
        {console.log(name.current.value)}
    }
  return (
    <div>
        <h2>useRef Hook Example</h2>
        <input type="text" onChange={handleInputChange} ref={name} />
        <br/>
        
        <button>Submit</button>
    </div>
  )
}

export default RefComponent