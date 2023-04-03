import React from 'react'
import './ContactCard.scss'

const ContactCard = ({ icon, title, contact }) => {
  return (
    <div className='card'>
      <div className='image-card'>
        <img src={icon} />
      </div>
      <div className='desc'>
        <h5>{title}</h5>
        <p>{contact}</p>
      </div>
    </div>
  )
}

export default ContactCard