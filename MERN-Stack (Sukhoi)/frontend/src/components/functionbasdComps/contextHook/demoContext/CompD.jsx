import React, { useContext } from 'react'
import { allItemsContext } from './Storehouse'

const CompD = () => {
    const {count} = useContext(allItemsContext)
    
  return (
    <div>
        CompD
        <p>Triple of count = {count*3}</p>
    </div>
  )
}

export default CompD