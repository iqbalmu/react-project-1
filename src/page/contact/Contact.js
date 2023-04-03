import React from 'react'
import Title from '../../components/title/Title'
import './Contact.scss'

const Contact = () => {
  return (
    <div className='container'>
    <div className='contact-card'>
      <div className='contacts'>
        <Title title={"Contact"} desc={"Beberapa cara menghubungi saya."}/>
        <div className='contact-list'>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact