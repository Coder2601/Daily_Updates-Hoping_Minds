import React from 'react'
import NavigationMenu from './NavigationMenu'
import Footer from './Footer'

const Layout = (props) => {
  return (
    <div>
        <NavigationMenu />
        {props.children}
        <br />
        <Footer/>
    </div>
  )
}

export default Layout