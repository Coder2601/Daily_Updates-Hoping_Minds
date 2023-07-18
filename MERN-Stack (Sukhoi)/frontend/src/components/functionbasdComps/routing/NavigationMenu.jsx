import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../../style/navStyling.css'
import { useNavigate } from 'react-router-dom'


const NavigationMenu = () => {
  const locator = useNavigate();


  return (
    <div>
      <ul>
      <li>Navigation Menu</li>
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/about'}>About</NavLink></li>
      <li><NavLink to={'/products'}>Products</NavLink></li>
      <li><NavLink to={'/cart'}>Cart</NavLink></li>
      <li><NavLink to={'/courses'}>Courses</NavLink></li>
      <button>Login/Logout</button>
      <button onClick={()=>locator(-1)}>Prev</button>
      <button onClick={()=>locator(1)}>Next</button>
      </ul>
    </div>
  )
}

export default NavigationMenu