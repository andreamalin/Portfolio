/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Sections from '../Sections'
import useScreen from '../Observer'
import './Game.css'

import sprite1 from './images/sprite1.png'
import sprite2 from './images/sprite2.png'
import sprite3 from './images/sprite3.png'

const sprites = [sprite1, sprite2, sprite3]

const Sprite = ({ actualMove, actualSprite, actualOrientation }) => {
  const moveSprite = {
    marginLeft: `${actualMove}%`,
    transform: `scaleX(${actualOrientation})`,
  }

  return (
    <div className="spriteArea">
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
  const observer = useScreen(playableArea, 1)
  const [oneTime, setOneTime] = useState(0)

  const [move, setMove] = useState(0)
  const [actualSprite, setActualSprite] = useState(0)
  const [actualOrientation, setActualOrientation] = useState(1)

  useEffect(() => {
    if (observer && oneTime === 0) {
      playableArea.current.focus()
      setOneTime(1)
    }
  })

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      if (move - 4 <= 0) {
        setMove(92)
      } else {
        setMove(move - 4)
      }

      setActualSprite((actualSprite + 1) % 3)
      setActualOrientation(-1)
    }

    if (event.key === 'ArrowRight') {
      if (move + 4 > 92) {
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
        if (move >= 80 && move <= 92) {
          window.location.hash = '#Home'
        }
      } else if (move >= 8 && move <= 16) {
        window.location.hash = '#AboutMe'
      } else if (move >= 44 && move <= 52) {
        window.location.hash = '#Projects'
      } else if (move >= 76 && move <= 80) {
        window.location.hash = '#ContactMe'
      }
      setTimeout(() => {
        setOneTime(0)
      }, 500)
    }
  }

  return (
    <div>
      <h3>⬇ Use-your-arrows ⬇</h3>
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
