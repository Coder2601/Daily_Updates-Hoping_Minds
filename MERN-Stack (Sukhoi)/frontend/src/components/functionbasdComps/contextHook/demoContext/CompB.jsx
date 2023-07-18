import React, { useContext } from 'react'
import CompC from './CompC'
import { allItemsContext } from './Storehouse'

const CompB = () => {
    const {count} = useContext(allItemsContext);
  return (
    <div>
        CompB
        <p>Count : {count}</p>
<br />
        <CompC />
    </div>
  )
}

export default CompB