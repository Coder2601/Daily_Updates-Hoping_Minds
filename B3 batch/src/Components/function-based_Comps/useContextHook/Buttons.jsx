import React, { useContext } from 'react'
import { fullContext } from './MainContext'


function Buttons() {
    const{handleDec,handleInc} = useContext(fullContext)
    return (
    <div>
        <button onClick={handleInc}>
            Increase by 1
        </button>

        <button onClick={handleDec}>
            Decrease by 1
        </button>
    </div>
  )
}

export default Buttons