import React, { useEffect, useState } from 'react'
import Simple from './Simple';

function Button() {
    let[value,setValue] = useState(0);
    let[isClicked,setClicked] = useState(false);
    
    useEffect(()=>{
        console.log(`Mounting : ${value}`);
        console.log(`useEffect Called...`);
        return(()=>{
            console.log(`Unmounting : ${value}`);
        })
    },[])

    const handleUpdate=()=>{
        setValue(value+1);
        setClicked(true)
    }
  return (
    <>
      <button onClick={handleUpdate}>Render</button>
      <p>Value = {value}</p>
      {!isClicked ? <Simple />:null}
    </>
  )
}
export default Button