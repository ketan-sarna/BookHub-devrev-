import React from 'react'
import '../App'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div><h1>BookHub</h1></div>
        <Link to='/cart'><h3>Cart</h3></Link>
    </div>
  )
}

export default Navbar