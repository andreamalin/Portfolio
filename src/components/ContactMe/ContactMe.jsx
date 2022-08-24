import React from 'react'
import './ContactMe.scss'
import contactMe from '../../images/contact/Contact Me.png'
import madeWith from '../../images/contact/Made.png'
import linkedin from '../../images/contact/linkedin.png'
import github from '../../images/contact/github.png'
import gmail from '../../images/contact/gmail.png'

const ContactMe = () => (
  <div id="ContactMe">
    <img className="Contact" src={contactMe} alt="Contact Me" />
    <h2>Glad you&apos;re here (✿◠‿◠)</h2>

    <div className="extraSocialMedia">
      <a href="https://github.com/andreamalin/">
        <img src={github} alt="github" />
      </a>
      <a href="mailto:andreaa.malin@gmail.com">
        <img src={gmail} alt="gmail" />
      </a>
      <a href="https://www.linkedin.com/in/aamayamalin/">
        <img src={linkedin} alt="linkedin" />
      </a>
    </div>

    <h6>Or send me an email to andreaa.malin@gmail.com</h6>

    <img className="final" src={madeWith} alt="Made with react and photoshop" />
  </div>
)

export default ContactMe
