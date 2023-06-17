import React from 'react'
import './Home.css'
import logo from './icon-book.png'
import hero from './hero.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
   
    <div className='hero'>
    <Link to='/lib'>
      <button className='herobtn'>
        Join Today
      </button>
      </Link>
     
    <img className='main' src={hero}></img>
    </div>
  
    </>
  )
}

export default Home
