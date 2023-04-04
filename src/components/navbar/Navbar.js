import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='nav'>
        <h1 className='title'>MUHAKIM</h1>
        <div className='navbar'>
          <a href='#' >Profile</a>
          <a href='#' >Skils</a>
          <a href='#' >Projects</a>
          <a href='#' >Contact</a>
        </div>
        <div>
          <a href='#' className='btn-contact'>kontak</a>
        </div>
    </div>
  )
}

export default Navbar