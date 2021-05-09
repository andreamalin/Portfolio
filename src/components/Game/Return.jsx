import React from 'react'
import PropTypes from 'prop-types'
import PlayableArea from './PlayableArea'
import './Game.css'

const Return = ({ actualArea, goHome }) => (
  <div className="game">
    <h3>
      Want to go back?
    </h3>
    <PlayableArea goHome={goHome} actualArea={actualArea} />
  </div>
)

Return.propTypes = {
  goHome: PropTypes.bool,
  actualArea: PropTypes.string.isRequired,
}

Return.defaultProps = {
  goHome: false,
}

export default Return
