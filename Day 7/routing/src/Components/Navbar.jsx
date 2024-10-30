import React from 'react'
import "../css/Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to={"/"} >Home</Link>
        <Link to={"/products"} >Products</Link>
        <Link to={"/contact"} >Contact Us</Link>
    </div>
  )
}

export default Navbar