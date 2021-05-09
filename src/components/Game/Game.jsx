/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react'
import './Game.css'

import controllers from './images/controllers.png'
import Logo from '../PersonalInfo/Logo'
import PlayableArea from './PlayableArea'

const Game = () => {
  const logo = React.createRef()

  setTimeout(() => {
    logo.current.style.display = 'none'
  }, 4300)

  return (
    <div id="Home">
      <div ref={logo} id="completeLogo">
        <Logo />
      </div>
      <div className="game">
        <h1>Hi there 👋, I&apos;m Andrea Amaya</h1>
        <h3>
          Position the slime in front of any door
          and visit the section :) or press the button
        </h3>
        <PlayableArea actualArea="play" />
        <img id="controllers" src={controllers} alt="controllers" />
      </div>
    </div>
  )
}

export default Game
