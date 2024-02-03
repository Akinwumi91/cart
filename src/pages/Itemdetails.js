import React from 'react'
import { useParams } from 'react-router-dom'
import { myproducts } from '../products';
const Itemdetails = () => {
    const {id} = useParams();
    const post = myproducts.find(post => (post.id).toString() === id)
  return (
    <div>
      <article className='oneproduct'>
        {post && 
        <div className=' d-flex '>
          <div className='oneproductimg'>
          <img className="card-img-top" alt='' src={post.image} />
          </div>
            <div className='discription card-body'>
                <p ><b>{post.name}</b></p>
                <p >${post.price}</p>
                <p >${post.body}</p>


            </div> 
        </div>

        }
      </article>
    </div>
  )
}

export default Itemdetails