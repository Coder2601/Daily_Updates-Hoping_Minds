import React, { useContext, useState } from 'react'
import CompB from './CompB'
import { treasure } from './context/Confusion';

const CompA = () => {
    
    const {msg}= useContext(treasure);
  return (
    <div>
        CompA
        <p>Message: {msg}</p>
        <CompB />
    </div>
  )
}

export default CompA