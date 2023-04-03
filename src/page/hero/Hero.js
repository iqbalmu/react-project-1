import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Intro from '../../components/intro/Intro'
import './Hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <Navbar/>
        <Intro />
      </div>
    </div>
  )
}

export default Hero