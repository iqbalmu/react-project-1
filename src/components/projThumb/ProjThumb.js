import React from 'react'
import './ProjThumb.scss'

const ProjThumb = ({ image, title, text, link }) => {
  return (
    <a href={link} target='_blank'>
      <div className='thumb'>
        <img src={image} />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </a>
  )
}

export default ProjThumb