import React, { useContext } from 'react'
import CompC from './CompC';
import { treasure } from './context/Confusion';

const CompB = () => {
    const{count}=useContext(treasure)
    
  return (
    <div>
        CompB
        <p>Count : {count}</p>
        <CompC />
    </div>
  )
}

export default CompB