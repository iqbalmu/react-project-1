import React from 'react'
import './ContactForm.scss'

const ContactForm = () => {
    return (
        <div className='form-contact'>
            <div className='form-group'>
                <div className='form-control'>
                    <label>Name</label>
                    <input type='text' />
                </div>
                <div className='mid'></div>
                <div className='form-control' >
                    <label>Email</label>
                    <input type='email' />
                </div>
            </div>
            <div className='form-control'>
                <label>Subject</label>
                <input type='text' />
            </div>
            <div className='form-control'>
                <label>Message</label>
                <textarea></textarea>
            </div>
            <button className='btn'>Send</button>
        </div>
    )
}

export default ContactForm