/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Github from '../../images/projects/github.png'
import ExternalUrl from '../../images/projects/external-link.png'

const Dragable = ({
  name, title, information, githubUrl, externalUrl,
}) => {
  const [coords, setCoords] = useState({ translate: 'translate(0, 0)' })
  const [updateCoords, setUpdateCoords] = useState(false)
  const [seeNotepad, setSeeNotepad] = useState(false)

  const width = 380
  const height = 200

  const onDragSquare = (event) => {
    if (updateCoords) {
      if (event.type !== 'touchmove') {
        setCoords({
          transform: `translate(${event.screenX - width / 2}px, ${event.screenY - height / 2}px)`,
          left: 0,
          top: 0,
        })
      }
    }
  }

  const onDragCircle = (event) => {
    if (event.type === 'mousedown' || event.type === 'touchstart') {
      setUpdateCoords(true)
    } else if (event.type === 'mouseup' || event.type === 'touchend') {
      setUpdateCoords(false)
    }
  }

  return (
    seeNotepad
      ? (
        <div
          className={`card ${name}`}
          onMouseDown={onDragCircle}
          onMouseUp={onDragCircle}
          onMouseMove={onDragSquare}
          onTouchStart={onDragCircle}
          onTouchEnd={onDragCircle}
          onTouchMove={onDragSquare}
          style={coords}
        >
          <h3>{title}</h3>
          {
            information.map((item, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <p key={`${title}${key}`}>
                ✅
                {item}
              </p>
            ))
          }

          <div className="icons">

            { githubUrl ? (
              <a href={githubUrl} target="_blank" rel="noreferrer">
                <img src={Github} alt="Github" />
              </a>
            ) : ''}
            { externalUrl ? (
              <a href={externalUrl} target="_blank" rel="noreferrer">
                <img src={ExternalUrl} alt="External url" />
              </a>
            ) : ''}

            <button type="button" onClick={() => setSeeNotepad(!seeNotepad)}>Go back</button>
          </div>
        </div>
      )
      : (
        <div
          className={`inside-card ${name}`}
          onMouseDown={onDragCircle}
          onMouseUp={onDragCircle}
          onMouseMove={onDragSquare}
          onTouchStart={onDragCircle}
          onTouchEnd={onDragCircle}
          onTouchMove={onDragSquare}
          style={coords}
        >
          <button type="button" onClick={() => setSeeNotepad(!seeNotepad)}>Read about it</button>
        </div>
      )
  )
}

Dragable.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  information: PropTypes.arrayOf(PropTypes.string),
  githubUrl: PropTypes.string,
  externalUrl: PropTypes.string,
}

Dragable.defaultProps = {
  title: '',
  information: [],
  githubUrl: undefined,
  externalUrl: undefined,
}

export default Dragable
