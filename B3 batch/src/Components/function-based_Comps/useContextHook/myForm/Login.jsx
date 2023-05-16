import React, { useContext } from 'react'
import { formContext } from './MainComp'

const Login = () => {
    const{handleSubmit, handleChange} = useContext(formContext);

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' placeholder='name..' onChange={handleChange}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Login