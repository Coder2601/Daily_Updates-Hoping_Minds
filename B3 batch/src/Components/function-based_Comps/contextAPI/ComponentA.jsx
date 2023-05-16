import React, { useContext, useState } from 'react'
import ComponentB from './ComponentB'
import { namesContext } from './MainParent'

function ComponentA() {
  const{fname} = useContext(namesContext)
  
  return (
    <>
      <h2>First Name: {fname}</h2>
      <ComponentB />
    </>
  )
}

export default ComponentA