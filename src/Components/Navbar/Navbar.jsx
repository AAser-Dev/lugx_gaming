import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<>
<div className="container-fluid bg-primary">
  <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
    <div className="col-md-3 mb-2 mb-md-0">
  <Link
    to={"/"}
    className="d-inline-flex link-body-emphasis text-decoration-none"
  >
    <img
      src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/logo.png"
      alt="LUGX Logo"
      className="img-fluid"
      style={{ maxHeight: '50px' }}
    />
  </Link>
</div>

    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 gap-3">
      <li><Link to={""} className="nav-link px-2 link-secondary text-light">Home</Link></li>
      <li><Link to={"our shop"} className="nav-link px-2 text-light">Our Shop</Link></li>
      <li><Link to={"product"} className="nav-link px-2 text-light">Product Details</Link></li>
      <li><Link to={"contact"} className="nav-link px-2 text-light">Contact Us</Link></li>
    </ul>
    <div className="col-md-3 text-end"> 
      <button type="button" className="btn btn-success me-2">Login</button> 
      <button type="button" className="btn btn-primary">Sign-up</button> 
    </div>
  </header>
</div>

</>
  )
}

export default Navbar
