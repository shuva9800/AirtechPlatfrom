import React from 'react'
import ContactUsForm from '../../ContactPage/ContactUsForm'

export default function ContactFormSection() {
  return (
    <div className='w-6/12 mx-auto'>
        <h1>Get in Touch</h1>
        <p>
            We’d love to here for you, Please fill out this form.
        </p>
        <div>
            <ContactUsForm/>
        </div>
    </div>
  )
}
