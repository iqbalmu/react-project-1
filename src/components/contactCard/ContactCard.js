import React from 'react'

const ContactCard = ({image, title, text}) => {
  return (
    <div className='card'>
        <img src={image}/>
        <div className='desc'>
            <h5>{title}</h5>
            <h5>{text}</h5>
        </div>
    </div>
  )
}

export default ContactCard