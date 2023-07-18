import React, { useEffect, useState } from 'react'

const DemoEffect = () => {

    const[hoverCount, setHoverCount] = useState(0);
    const[isHovered, setHovered]= useState('Dare to Hover on me');

    
    useEffect(()=>{
        // setTimeout(()=>{
        //    alert('Hi after 5 seconds..'); 
        // },5000);

        //fetch api and then map data on browser - Have titme till 5.30pm
        
        console.log('render...',hoverCount);

        return(()=>{
            console.log('unmounting...',hoverCount);
        })
    },[hoverCount])

    const handleHover=()=>{
        setHovered('Told you to be careful!!!')
        // alert('OOOHHHHHH.....Its a scary night for you today!!!!!!!!!!!')\
        setHoverCount(hoverCount+1);
    }

  return (
    <div>
        DemoEffect
        <br />
        <button onMouseOver={handleHover}>{isHovered}</button>
        <h3>Hovered : {hoverCount} times</h3>
    </div>
  )
}

export default DemoEffect