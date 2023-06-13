import React, { useState } from 'react'

const ControlledForm = () => {
    const[user,setUser]=useState({
        name:'',
        age:null
    });
    const handleChange=(e)=>{
        setUser((prev)=>({...prev,[e.target.id]: e.target.value}))
    }
    const handleSubmit=(e)=>{
        console.log(user);
        e.preventDefault();
    }
  return (
    <div>
        ControlledForm
        <form onSubmit={handleSubmit}>
            <label>Name : &nbsp;</label>
            <input type="text" id="name" onChange={handleChange}/> <br />
            <label>Age : &nbsp;</label>
            <input type="text" id="age" onChange={handleChange}/> <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ControlledForm