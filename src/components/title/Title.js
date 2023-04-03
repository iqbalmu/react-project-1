import React from 'react'
import './Title.scss'

const Title = ({title, desc}) => {
  return (
    <div className='title'>
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default Title