import React, { useContext } from 'react'
import CompB from './CompB';
import { allItemsContext } from './Storehouse';

const CompA = () => {
    const {count} = useContext(allItemsContext);

  return (
    <div>
        CompA
        <p>Double of Count : {2*count}</p>
        <br />
        <CompB />
    </div>
  )
}

export default CompA