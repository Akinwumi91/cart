import React from 'react'
import { myproducts } from '../products'
import { Shopcontext } from '../context/Shopcontext'
import { useContext } from 'react'
import Cartitem from './Cartitem'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {cartitems, gettotalamount} = useContext(Shopcontext)
  const totalamount = gettotalamount()


  const navigate = useNavigate()
   return (
    <div className='cart w-100%'>
      <div className='d-flex justify-content-center'><h3>Your Cart Items</h3></div>

      <div className='cartitems'>
        {myproducts.map((product) =>{
          if(cartitems[product.id] !== 0 ){
            return <Cartitem data={product} />
          }
        })}
      </div>

      { totalamount > 0 ?(
      <div className='checkout d-flex justify-content-center p-3'>
        <p className='m-3'>Subtotal: ${totalamount}</p>
        <button onClick={() => navigate("/")} className='m-3 btn btn-warning'>Continue Shopping</button>
        <button className='m-3 btn btn-warning'>Checkout</button>
      </div>
      ) :(
        <h4 className='d-flex justify-content-center'>Your Cart Is Empty</h4>
     )}
    </div>
  )
}

export default Cart