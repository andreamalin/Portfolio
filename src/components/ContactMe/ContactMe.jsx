import React from 'react'
import './ContactMe.css'
import contactMe from './Contact Me.png'
import madeWith from './Made.png'

const ContactMe = () => (
  <div id="ContactMe">
    <img className="Contact" src={contactMe} alt="Contact Me" />
    <h2>Glad you&apos;re here (✿◠‿◠)</h2>
    <a id="link" href="mailto:andreaa.malin@gmail.com">💌 andreaa.malin@gmail.com</a>
    <img className="final" src={madeWith} alt="Made with react and photoshop" />
  </div>
)

export default ContactMe
