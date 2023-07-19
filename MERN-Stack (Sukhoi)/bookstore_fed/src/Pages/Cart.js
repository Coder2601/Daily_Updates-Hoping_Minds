import React, { useDebugValue, useEffect, useState } from 'react'
import NormalLayout from '../Layout/NormalLayout'
import { useDispatch, useSelector } from 'react-redux'
import '../style.css'
import { removeFromCartAction } from '../Components/actions/removeActions'
import { getTotalAmount } from '../Components/actions/addToCartActions'
import { checkoutAction } from '../Components/actions/checkoutAction'
import { Link, useNavigate } from 'react-router-dom'

const Cart = () => {
  const cartData = useSelector(state => state);
  const dispatch = useDispatch();
  const [amt, setAmt] = useState(0);

  const nav = useNavigate();

  useEffect(() => {
    let x = getTotalAmount();
    // console.log(x);

    setAmt(x)

  }, [cartData])

  const handleCheckout = () => {
    dispatch(checkoutAction(cartData));
    nav('/checkout')
  }

  return (
    <NormalLayout>
      <h2>Cart</h2>
      <hr />

      {cartData.length < 1 ?
        <h2>No items in Cart. Visit <Link to={'/products'}>Products</Link> Page.</h2>
        :
        <>
          <table className='cartTable'>
            <tbody className='cartTableBody'>
              <tr>
                <td>S. No.</td>
                <td>Name</td>
                <td>Image</td>
                <td>Price</td>
              </tr>
              {/* {  console.log(cartData)} */}
              {cartData.map((item, index) => {
                return (
                  <tr className='cartTableRow' key={index}>
                    <td className='cartTableData'>{index + 1}</td>
                    <td className='cartTableData'><h5>{item.name}</h5></td>
                    <td className='cartTableData'><img src={item.link} width='100px' height='100px' /></td>
                    <td className='cartTableData'>Rs. {item.price}</td>
                    <td><button onClick={() => dispatch(removeFromCartAction(item.id))}>x</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div>
            <h2>Total Amount : {amt} </h2>
            <button onClick={handleCheckout}>CheckOut</button>
          </div>
        </>}
    </NormalLayout>
  )
}

export default Cart