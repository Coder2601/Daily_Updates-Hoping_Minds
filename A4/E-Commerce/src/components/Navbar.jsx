import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const ulTag = {
    
  }
  const listItems={
    fontSize:'25px',
    padding:'20px',
    marginBottom:'50px',
    
  }
  const nav = useNavigate();
  return (
    <>
      <nav style={ulTag}>
        <b onClick={()=>nav(-1)}>{` <= `}</b>
        <b>Navigate</b>
        <b onClick={()=>nav(1)}>{` => `}</b>
        
        <b style={listItems}>CarShop</b>
        <Link style={listItems} to={'/'}>Home</Link>
        <Link style={listItems} to={'/products'}>Products</Link>
        <Link style={listItems} to={'/cart'}>Cart</Link>
        <Link style={listItems} to={'/login'}>Login</Link>
        
      </nav>
    </>
  )
}

export default Navbar