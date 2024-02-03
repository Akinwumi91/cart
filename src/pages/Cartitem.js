import React from 'react'
import { useContext } from 'react';
import { Shopcontext } from '../context/Shopcontext';

const Cartitem = (props) => {
    const {id, name, price, image} = props.data;
    const{cartitems, addtocart, removefromcart, updatacartitemcount} = useContext(Shopcontext)

  return (
    <div className='itemincart card m-auto d-flex'>
        <img src={image} alt=''/>
        <div className='description'>
            <p><b>{name}</b></p>
            <p><b>{price}</b></p>
            <div className='counthandler d-flex p-3'>
                <button onClick={() => removefromcart(id)} className='btn btn-primary'>-</button>
                <input onChange={(e) => updatacartitemcount(Number(e.target.value), id)} value={cartitems[id]} className='w-50' />
                <button onClick={() => addtocart(id)} className='btn btn-primary'>+</button>
            </div>
        </div>
    </div>
  )
}

export default Cartitem