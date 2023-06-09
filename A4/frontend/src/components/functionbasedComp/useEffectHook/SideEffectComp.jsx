import React, { useEffect, useState } from 'react'

const SideEffectComp = () => {
    const [count, setCount] = useState(0);
    const[isLogin, setLogin] = useState(false);

    useEffect(function () {
        console.log(count,'mounted...');
        // setTimeout(()=>{
        //     setCount(count+1)
        // },2000)
        
        return(()=>{
            console.log(count,'unmounted')
        })
    },[isLogin]);
    

    return (
        <div>
            {console.log(isLogin)}
            <h2>SideEffectComp</h2>
            <p>Count: {count} </p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={()=>setLogin(!isLogin)}>Login</button>
        </div>
    )
}

export default SideEffectComp
