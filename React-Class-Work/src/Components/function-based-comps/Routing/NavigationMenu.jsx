import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const NavigationMenu = () => {
  const letsGo = useNavigate()
  return (
    <div className='navBar'>
        <ul>
          <li>
            <button onClick={()=>letsGo(-1)}>Prev</button>
            <button onClick={()=>letsGo(1)}>Next</button>
          </li>
            <li>NavigationMenu</li>
            <Link to={'/home'}><li>Home</li></Link>
            
            <Link to={'/about'}><li>About</li></Link>
            <Link to={'/courses'}><li>Courses</li></Link>
            
        </ul>
    </div>
  )
}

export default NavigationMenu