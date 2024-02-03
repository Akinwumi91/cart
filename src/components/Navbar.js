import React from 'react'
import {Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

const Navbar = () => {
  return (
    <div className='navbar navbar-expand-lg navbar-dark bg-dark'>
    <a className="navbar-brand" href="/">Xshop</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button> 
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav m-auto">
    <Link to="/" className="nav-item nav-link"> Shop </Link>
    <Link to="/cart" className="nav-item nav-link "> <ShoppingCart size={32} /> </Link>
    </div>
  </div>

    </div>
  )
}

export default Navbar