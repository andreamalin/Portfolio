import React from 'react'
import './home.scss'
import logo from '../../images/me.png'
import name from '../../images/logo.png'

const Home = () => (
  <div className="coffee-shop">
    <div className="photo-container">
      <img src={logo} alt="logo" />
    </div>
    <div className="text">
      <img className="name-container" alt="Andrea Amaya" src={name} />
      <h2>
        Frontend developer interested in data security
      </h2>
      <p>
        Currently working on smarttvs and building websites
        while attending the best university in my country (UVG)
      </p>
      <p>
        I am a positive and determined person.
        No one will stop me once I have started something.
      </p>
      <p>
        I&apos;ve loved designing in Photoshop since I was a kid. After that, I discovered the
        programming world and I fell in love for the second time.
      </p>
      <div className="half-circle" />
    </div>
  </div>
)

export default Home
