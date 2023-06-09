import React, { useContext } from 'react'
import { treasure } from './context/Confusion'

const CompC = () => {
    const{msg}= useContext(treasure);

  return (
    <div>
        CompC
        <p>Message: {msg}</p>
    </div>
  )
}

export default CompC