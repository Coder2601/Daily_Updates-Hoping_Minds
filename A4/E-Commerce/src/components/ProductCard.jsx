import React from 'react'
import { addtoCartAction } from '../redux/actions/cartActions';
import {useDispatch} from 'react-redux'

const ProductCard = ({product}) => {
  const divTag={
    width:'250px',
    height:'300px',
    border:'2px solid black',
    display:'inline-block',
    backgroundColor:'black',
    color:'white',
    marginLeft:'5px',
    marginTop:'5px',
    textAlign:'center',
    paddingTop:'15px'
  }
  const {id,img,name,price} = product;
  const dispatch = useDispatch();

  return (
    <div id={id} style={divTag}>
      <img src={img} alt="Car" width='200px' height='150px' />
      <br />
      <h4>{name}</h4>
      <p>{price}</p>
      <hr />
      <button onClick={()=>dispatch(addtoCartAction(id))}>Add To Cart</button>
    </div>
  )
}

export default ProductCard