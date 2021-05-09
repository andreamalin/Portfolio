/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Sections from '../Sections'
import './Game.css'

import sprite1 from './images/sprite1.png'
import sprite2 from './images/sprite2.png'
import sprite3 from './images/sprite3.png'

const sprites = [sprite1, sprite2, sprite3]

const Sprite = ({ actualMove, actualSprite, actualOrientation }) => {
  const moveSprite = {
    marginLeft: `${actualMove}vh`,
    transform: `scaleX(${actualOrientation})`,
  }

  return (
    <div className="row">
      <img className="sprite" src={sprites[actualSprite]} style={moveSprite} alt="player" />
    </div>
  )
}

Sprite.propTypes = {
  actualMove: PropTypes.number.isRequired,
  actualSprite: PropTypes.number.isRequired,
  actualOrientation: PropTypes.number.isRequired,
}

const PlayableArea = ({ actualArea, goHome }) => {
  const playableArea = React.createRef()

  const [move, setMove] = useState(0)
  const [actualSprite, setActualSprite] = useState(0)
  const [actualOrientation, setActualOrientation] = useState(1)

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      if (move - 2 <= 0) {
        setMove(108)
      } else {
        setMove(move - 4)
      }

      setActualSprite((actualSprite + 1) % 3)
      setActualOrientation(-1)
    }

    if (event.key === 'ArrowRight') {
      if (move + 2 >= 108) {
        setMove(0)
      } else {
        setMove(move + 4)
      }

      setActualSprite((actualSprite + 1) % 3)
      setActualOrientation(1)
    }

    if (event.key === 'ArrowUp') {
      window.location.hash = ''
      if (goHome) {
        if (move >= 100 && move <= 112) {
          window.location.hash = '#Home'
        }
      } else if (move >= 0 && move <= 8) {
        window.location.hash = '#AboutMe'
      } else if (move >= 52 && move <= 68) {
        window.location.hash = '#Projects'
      } else if (move >= 84 && move <= 100) {
        window.location.hash = '#ContactMe'
      }
    }
  }

  return (
    <div>
      <h3>⬇ C l i c k  - t o -  p l a y ⬇</h3>
      <div id="gameView" role="banner" className={actualArea} tabIndex="0" onKeyDown={handleKeyDown} ref={playableArea}>
        <Sections goHome={goHome} />
        <Sprite
          actualMove={move}
          actualSprite={actualSprite}
          actualOrientation={actualOrientation}
        />
      </div>
    </div>
  )
}

PlayableArea.propTypes = {
  actualArea: PropTypes.string.isRequired,
  goHome: PropTypes.bool,
}

PlayableArea.defaultProps = {
  goHome: false,
}

export default PlayableArea
