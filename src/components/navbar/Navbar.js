import React, { useState } from 'react'
import { Link } from "react-scroll";
import './Navbar.scss'

const Navbar = () => {

  const [bgNav, setBgNav] = useState('')

  const changeBackground = () => {
    let pageY = window.scrollY
    if(pageY !== 0){
      setBgNav('bgOnScroll')
    }else{
      setBgNav('')
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <div className={`nav ${bgNav}`}>
      <Link to="hero" spy={true} smooth={true} offset={-70} duration={500} >
        <h1 className='title'>MUHAKIM</h1>
      </Link>
      <div className='navbar'>
        <Link to="profile" spy={true} smooth={true} offset={-70} duration={500} >Profile</Link>
        <Link to="skils" spy={true} smooth={true} offset={-70} duration={500} >Skils</Link>
        <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} >Projects</Link>
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} >Contact</Link>
      </div>
      <div>
        <Link className='btn-contact' to="contact" spy={true} smooth={true} offset={-70} duration={500} >kontak</Link>
        {/* <a href='#' className='btn-contact'>kontak</a> */}
      </div>
    </div>
  )
}

export default Navbar