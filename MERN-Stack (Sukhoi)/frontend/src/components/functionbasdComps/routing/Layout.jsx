import React from 'react'
import NavigationMenu from './NavigationMenu'

const Layout = ({children}) => {
  return (
    <>
    <NavigationMenu/>
    <hr />
    {children}
    
    </>
  )
}

export default Layout