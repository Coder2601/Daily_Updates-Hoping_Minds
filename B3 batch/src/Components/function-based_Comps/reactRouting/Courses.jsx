import React from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
// import '../../../styles/app.css'

const Courses = () => {
  let nav = useNavigate();
  
  const handleAbout=()=>{
    nav('/about')
  }
  const handleBack=()=>{
    nav(-1)
  }

  return (
    <div>

        <h2>Courses</h2>
        <nav>
            <NavLink to='fedCourse'>Front-End Course</NavLink>{' | '}
            <NavLink to='bedCourse'>Back-End Course</NavLink>
        </nav>
        <Outlet/>
        <button onClick={handleAbout}>Go to About</button>
        <button onClick={handleBack}>Go Back</button>
    </div>
  )
}

export default Courses