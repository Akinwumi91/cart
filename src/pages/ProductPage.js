import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { Link } from 'react-router-dom';

const ProductPage = (props) => {
  const {id, name, price, image, body} = props.data;
  const {addtocart, cartitems} = useContext(Shopcontext);

  const cartitemamount = cartitems[id]
  return (
        <article>
          <Link to={`/shop/${id}`} className='card'>
            <img className="card-img-top" src={image} alt='' />
            <div className='discription card-body'>
                <p className='card-title'><b>{name}</b></p>
                <p className='card-text'>${price}</p>
                <p className='body'>{body.length <= 10 ? body: `${body.slice(0, 20)}...`}</p>
            </div>  
        </Link>
          <button className='btn btn-primary' onClick={() => addtocart(id)}>Add to Cart{cartitemamount > 0 && <>({cartitemamount})</>}</button>

        </article>
   
       
  )
}

export default ProductPage