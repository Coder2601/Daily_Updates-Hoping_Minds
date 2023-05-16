//Controlled Component

// import React,{useState} from 'react'

// const InputVal = () => {
    
//     const[name,setName] = useState('');
//     const[isClicked,setClicked] = useState(false);

//     const handleInputChange=(event)=>{
//         setName(event.target.value)
//     }

//     const handleButtonClick=()=>{
//         setClicked(true)
//     }

//   return (
//     <>
//         <label>Name : </label>
//         <input type='text' placeholder='Name' onChange={handleInputChange} />
//         <br/>

//         <button onClick={handleButtonClick} >Submit</button>

//         {isClicked?<h2>{name}</h2>:null}

//     </>
//   )
// }

// export default InputVal




//Unctrolled Component
import React, { useRef, useState } from 'react'

const InputVal = () => {
    
    const name = useRef('');
    const [isClicked,setClicked] = useState(false);

    const handleInputChange=()=>{
        console.log(name.current.value);
    }

    const handleBlurEvent=()=>{
        setClicked(true)
    }
    

  return (
    <div>

        {console.log(name.current.value)}
        {console.log(isClicked.current)}
        
        <label>Name : </label>
        <input type='text' placeholder='Name' ref={name} onChange={handleInputChange} />
        <br/>
        <button onClick={handleBlurEvent}>Submit</button>

        {isClicked?<h2>{name.current.value}</h2>:null}

    </div>
  )
}

export default InputVal