import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Login</h1>
        <br /><hr />
        <form>
            <label >Name </label>
            <input type="text" placeholder='name' />
            <br />
            <label>Your Password</label>
            <input type="text" placeholder='password'/>
            <br />
            <input type='submit' value="Login" />
            <br />
            <p>Not a User? Register Here First</p>
        </form>
    </div>
  )
}

export default Login