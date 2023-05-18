import React, { useContext, useState } from 'react'
import CompC from './CompC'
import { myContext } from './MainContext'

const CompB = () => {
    const{count} = useContext(myContext);
  return (
    <div>
        <h2>CompB</h2>
        <p>Count : {count}</p>
        <CompC />
    </div>
  )
}

export default CompB