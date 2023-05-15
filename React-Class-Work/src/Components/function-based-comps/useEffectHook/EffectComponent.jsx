import React, { useEffect, useState } from 'react'

const EffectComponent = () => {
    const[msg,setMsg] = useState('Learning Effect Hook');
    const[name, setName] = useState('Divya');

    useEffect(()=>{
        console.log('useEffect 1 Hook is Called.. I am vehlaa..');
    })

    useEffect(()=>{
        let x = parseInt(prompt('Enter your grade'));
        console.log('useEffect 2 Hook is Called..', x);
    },[])

    useEffect(()=>{
        console.log('useEffect 3 Hook is Called..');
        setTimeout(()=>{
            console.log('Hi after 3 seconds');
        },3000)
    },[name]);
 
  return (
    <>
        <h2 onDoubleClick={()=>setMsg('State Updated')}>Effect Component</h2>
        <p onClick={()=>setName('Manav')}>{name} :  {msg}</p>
    </>

  )
}

export default EffectComponent