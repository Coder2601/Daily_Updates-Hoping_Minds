import React, { useContext } from 'react'
import CompD from './CompD'
import { allItemsContext } from './Storehouse'

const CompC = () => {
  
    const {message} = useContext(allItemsContext);

    return (
    <div>
        CompC
        {/* prop drilling */}
        <p>{message}</p>
<br />
        <CompD />
    </div>
  )
}

export default CompC