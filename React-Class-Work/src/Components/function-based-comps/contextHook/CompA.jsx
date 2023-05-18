import React, { useContext } from 'react'
import CompB from './CompB'
import { myContext } from './MainContext'

const CompA = () => {
   const {msg} = useContext(myContext);
  return (
    <div>
        <h2>CompA</h2>
        <p>Message : {msg} </p>
        <CompB />
    </div>
  )
}

export default CompA