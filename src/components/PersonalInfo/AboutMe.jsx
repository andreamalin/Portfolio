import React from 'react'
import Skills from '../Skills/Skills'
import Hobbies from '../Hobbies/Hobbies'
import './AboutMe.css'
import me from './images/me.jpg'
import H from './images/H.png'
import O from './images/O.png'
import M from './images/M.png'
import E from './images/E.png'

const AboutMe = () => (
  <div className="aboutMeContainer">
    <div id="rotate" />
    <section id="AboutMe" className="AboutMe">
      <div className="info">
        <div className="frames">
          <div className="pair">
            <img src={H} alt="H" />
            <div>
              WHO IS ANDREA AMAYA?
              Frontend developer interested in data security 🤯
            </div>
          </div>

          <div className="pair">
            <img id="me" src={me} alt="Me" />
            <img src={O} alt="O" />
          </div>
        </div>
        <div className="frames">
          <div className="pair">
            <img src={M} alt="M" />
            <div>
              I am a positive and determined person.
              No one will stop me once I have started something.
              I like trying new things, experimenting with animations
              and bringing happiness to others.
            </div>
          </div>
          <div className="pair">
            <div>
              I&apos;ve loved designing in Photoshop since I was a kid. After that, I discovered the
              programming world and I fell in love for the second time.
            </div>
            <img src={E} alt="E" />
          </div>
        </div>
      </div>
      <Skills />
      <Hobbies />
    </section>
  </div>
)

export default AboutMe
