import React, { createContext, useState } from 'react'
export const formContext = createContext();

const MainComp = (props) => {
    const [name, setname] = useState('');
    const [isSubmitted,setSubmitted] = useState(false)

    const handleChange=(e)=>{
        setname(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmitted(true)
    }
    const handleBack=()=>{
        setSubmitted(false)
    }

  return (
    <div>
        <formContext.Provider value={{name,handleChange, handleSubmit,isSubmitted, handleBack}}>
            {props.children}
        </formContext.Provider>
    </div>
  )
}

export default MainComp