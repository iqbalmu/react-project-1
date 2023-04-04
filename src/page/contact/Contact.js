import React from 'react'
import Title from '../../components/title/Title'
import { contacts } from "../../data";
import './Contact.scss'
import ContactCard from '../../components/contactCard/ContactCard';
import ContactForm from '../../components/contactForm/ContactForm';

const Contact = ({ref}) => {
  return (
    <div ref={ref} className='container'>
      <div className='contact-card'>
        <div className='contacts'>
          <Title className={"title"} title={"Contact"} desc={"Beberapa cara menghubungi saya."} />
          <div className='contact-list'>
            {
              contacts.map(contact => (
                <ContactCard key={contact.id} icon={contact.icon} title={contact.title} contact={contact.contact} />
              ))
            }
          </div>
        </div>

        <div className='form-wrap'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact