import React from 'react'
import { myproducts } from '../products'
import ProductPage from './ProductPage'

const Shop = () => {
  return (
    <div className='shop container'>
        <div className='shoptitle'>
            <h1>PedroTech Shop</h1>
        </div>
        <div className='products'>
            {myproducts.map((product) =>
             <ProductPage data={product} key={product.id}/>
             )}
        </div>
    </div>
  )
}

export default Shop