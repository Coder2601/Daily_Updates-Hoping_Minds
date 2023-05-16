import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import '../../../styles/app.css'

const Navbar = () => {
  let nav = useNavigate()
  const handleBack=()=>{
    nav(-1);
  }
  const handleNext=()=>{
    nav(+1);
  }
  return (
    <div>
        <nav>
            <NavLink to='/' >Home</NavLink> 
            { ' | ' }
            <NavLink to='/courses' >Courses</NavLink>
            { ' | ' }
            <NavLink to='/about' >About</NavLink>
            { ' | ' }
            <NavLink to='/login' >Login</NavLink>
            { ' | ' }
            <button onClick={handleBack}>Back</button>
            { ' | ' }
            <button onClick={handleNext}>Next</button>
        </nav>
    </div>
  )
}

export default Navbar