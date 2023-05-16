import React, { useContext } from 'react'
import { formContext } from './MainComp'

const Home = () => {
    const{name, handleBack} = useContext(formContext)
  return (
    <div>
        <h2>{name}</h2>
        <button onClick={handleBack}>Go Back</button>
    </div>
  )
}

export default Home