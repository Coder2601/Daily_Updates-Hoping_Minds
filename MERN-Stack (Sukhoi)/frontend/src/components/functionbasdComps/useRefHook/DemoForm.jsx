import React, { useRef } from 'react'

const DemoForm = () => {
    const name = useRef('Sagar')

    const age = useRef();
    console.log(age);

  return (
    <div>
        <h2>DemoForm</h2>
        <form>
            <label>Name : </label>
            <input type="text" id="name" ref={name} onChange={()=>console.log(name.current.value)} />
            <br /><br />

            <label>Age : </label>
            <input type="text" id="age" ref={age} onChange={()=>console.log(`Age: ${age.current.value}`)} />
            <br /><br />

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default DemoForm