import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Basket = () => {
    const fruits = useSelector(state=>state.fruits);
    const[tempFruit,setTempFruit] = useState('');
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Fruits Basket</h2>
        <input type="text" placeholder='Enter another fruit' onChange={(e)=>setTempFruit(e.target.value)} />
        <button onClick={()=>dispatch({type:'ADD',payload:tempFruit})}>Add</button>
        <ul>
            {fruits.map((item,index)=><li key={index}>{item}</li>)}
        </ul>
        <button onClick={()=>dispatch({type:'REMOVE'})}>Remove one fruit</button>
    </div>
  )
}

export default Basket