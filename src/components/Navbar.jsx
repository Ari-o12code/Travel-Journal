import React from 'react'
import navicon from '../assets/Fill 213.png'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <img className='world-icon' src={navicon} alt="world icon" />
      <p>my travel journal.</p>
    </div>
  )
}

export default Navbar
