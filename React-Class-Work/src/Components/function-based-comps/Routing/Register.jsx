import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const nav = useNavigate();
  const[user,setUser] = useState({
    name:'',
    age:0,
    pass:''
  })

  const handleIpChange=(event)=>{
    if(event.target.id=='name'){
      let allIds = Object.keys(localStorage);
      if(allIds.includes(event.target.value)){
        console.log(event.target.value, 'matched');
        alert('User already exist!')
      }
    }else{
      setUser((prev)=>({...prev,[event.target.id]:event.target.value}));
    }
    
  }
  const handleSubmit=(event)=>{
    // event.preventDefault();
    console.log(user);
    let userId = user.name;
    let userPass = user.pass;
    let allIds = Object.keys(localStorage);
    if(allIds.includes(userId)){
      console.log(userId, 'matched');
      alert('User already exist!')
    }
    else{
      localStorage.setItem(userId,userPass);
      nav('/')
    }


  }
  return (
    <div>
        <h1>Register page</h1>
        <br /><hr />
        <form onSubmit={handleSubmit}>
            <label >Name </label>
            <input onChange={handleIpChange} type="text" placeholder='name' id='name' />
            <br />
            <label>Age</label>
            <input onChange={handleIpChange} type="text" placeholder='Age' id='age'/>
            <br />
            <label>Create Password</label>
            <input onChange={handleIpChange} type="password" placeholder='password' id='pass'/>
            <br />
            <input type='submit' value="Register" />
        </form>
    </div>
  )
}

export default Register