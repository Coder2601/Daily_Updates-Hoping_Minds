import React, { useContext, useState } from 'react'
import ComponentC from './ComponentC'
import { namesContext } from './MainParent'

function ComponentB() {
  const{lname} = useContext(namesContext)
  
  return (
    <>
    <h3>Last Name: {lname} </h3>
    <ComponentC />
    </>
  )
}

export default ComponentB