import React from 'react'

const CartItems = ({cart, itemId, style}) => {
  const{img,name,price} = cart;

  return (
    <tr style={style}>
      <td style={style}>{itemId+1}</td>
      <td style={style}><img src={img} width='100px' height='100px' /></td>
      <td style={style}>{name}</td>
      <td style={style}>{price}</td>
      <td style={style}><button>x</button></td>
    </tr>
  )
}

export default CartItems