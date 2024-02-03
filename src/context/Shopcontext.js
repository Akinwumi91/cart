import React, { useState } from 'react'
import { myproducts } from '../products'
import { createContext } from 'react'

export const Shopcontext = createContext()

const getdefaultcart = () =>{
    let cart = {};
    for(let i = 1; i < myproducts.length + 1; i++){
        cart[i] = 0
    }
    return cart;
}


const ShopcontextProvider = (props) => {
    const[cartitems, setcartitems] = useState(getdefaultcart());
  
    const addtocart = (itemid) =>{
        setcartitems(prev => ({...prev, [itemid]: prev[itemid] + 1 }))
    }

    const removefromcart = (itemid) =>{
        setcartitems(prev => ({...prev, [itemid]: prev[itemid] - 1 }))
    }

    const updatacartitemcount = (newamount, itemid) =>{
        setcartitems(prev => ({...prev, [itemid]: newamount}))
    }

    const gettotalamount = () =>{
        let totalamount = 0;
        for(const item in cartitems){
            if(cartitems[item] > 0){
                let iteminfo = myproducts.find((product) => product.id === Number(item));
            totalamount += cartitems[item] * iteminfo.price
            }
        }
        return totalamount;
    };

    const contextvalue = {cartitems, addtocart, removefromcart, updatacartitemcount, gettotalamount}
    return (
    <Shopcontext.Provider value={contextvalue}>{props.children}</Shopcontext.Provider>
  )
}

export default ShopcontextProvider