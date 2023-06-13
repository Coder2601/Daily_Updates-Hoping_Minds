import React, { useRef } from 'react'

const UncontrolledForm = () => {
    const name = useRef('Divya');
    const age= useRef("");

    const handleSubmit=(e)=>{
        console.log(name.current.value);
        console.log(age.current.value);
        e.preventDefault()
    }
  return (
    <div>
        {console.log(name)}
        UncontrolledForm
        <form onSubmit={handleSubmit}>
            <label>Name : &nbsp;</label>
            <input type="text" ref={name} /> <br />
            <label>Age : &nbsp;</label>
            <input type="text" ref={age} /> <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default UncontrolledForm