/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react'
import './Game.css'

import Logo from '../PersonalInfo/Logo'
import PlayableArea from './PlayableArea'

const Game = () => {
  const logo = React.createRef()

  setTimeout(() => {
    if (logo.current !== null) {
      logo.current.style.display = 'none'
    }
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
      </div>
    </div>
  )
}

export default Game
