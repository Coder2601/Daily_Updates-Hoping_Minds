import React from 'react'
import NormalLayout from '../Layout/NormalLayout'
import {books} from '../data'
import '../style.css'
import { handleAddToCart } from '../Components/actions/addToCartActions'
import {useDispatch} from 'react-redux'


const Products = () => {

  const dispatch = useDispatch();

  return (
    <NormalLayout>

      <h1>Products</h1>
      <hr/>
      
      <div className='bookContainer'>
        {books.map((item,index)=>{
          return(
            <div className='bookItem' key={index}>
              <img src={item.link} width='150px' height='150px' />
              <br/>
              <h3>{item.name}</h3>
              <h4>Price = Rs. {item.price}</h4>
              <button onClick={()=>dispatch(handleAddToCart(index))}>Add to Cart</button>
            </div>
          )
        })}
      </div>


    </NormalLayout>
  )
}

export default Products