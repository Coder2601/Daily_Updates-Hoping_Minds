import React from 'react'
import '../style.css'
import { Link } from 'react-router-dom'

const NavigationMenu = () => {
  return (
    <div>
        <ul className='navUl'>
            <li className='navLi'>NavigationMenu</li>
            <li className='navLi'><Link to={'/'}>Home</Link></li>
            <li className='navLi'><Link to={'/products'}>Products</Link></li>
            <li className='navLi'><Link to={'/cart'}>Cart</Link></li>
        </ul>
    </div>
  )
}

export default NavigationMenu