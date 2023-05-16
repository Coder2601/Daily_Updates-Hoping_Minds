import React, { useContext, useState } from 'react'
import { namesContext } from './MainParent'

function ComponentC() {
  const{exp,setexp} = useContext(namesContext)
  
  const handleExp=()=>{
    setexp(exp+1)
  }
  
  return (
    <>
    <h4>Experience: {exp} </h4>
    <button onClick={handleExp}>Increase Experience</button>
    </>
  )
}

export default ComponentC