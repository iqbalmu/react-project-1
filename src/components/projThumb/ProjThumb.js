import React from 'react'
import './ProjThumb.scss'

const ProjThumb = ({image, title, text}) => {
  return (
    <div className='thumb'>
        <img src={image}/>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default ProjThumb