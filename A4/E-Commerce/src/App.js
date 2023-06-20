import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  const [isLogged, setLogged] = useState(false)
  return (
    <>
      <Router>
        <Routes>
          <Route index element={isLogged ? <Home /> : <Login signIn={setLogged} />} />
          <Route path='/products' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          {isLogged?<Route path='/logout' element={<Home />} />:<Route path='/login' element={<Login signIn={setLogged} />} />}
          
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App