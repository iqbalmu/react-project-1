import React from 'react'
import './Intro.scss'
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div className='intro'>
      <h1 className='header'>
        Saya seorang front-end engineer, back-end engineer, dan juga UI designer
      </h1>
      <p className='desc'>
        Sejak 13 tahun saya memulai programming.<br /> Sejak 3 tahun memulai UI design.
      </p>
      <Link className='btn-more' to="profile" spy={true} smooth={true} offset={-70} duration={500} >Pelajari</Link>
    </div>
  )
}

export default Intro