import React from 'react'
import PropTypes from 'prop-types'

const Sections = ({ goHome }) => {
  if (goHome) {
    return (
      <div className="row">
        <div />
        <a href="#Home" className="section">LEAVE HOUSE</a>
        <div />
      </div>
    )
  }
  return (
    <div className="row">
      <a href="#AboutMe" className="section">ABOUT ME</a>
      <a href="#Projects" className="section">MY PROJECTS</a>
      <a href="#ContactMe" className="section">CONTACT ME</a>
    </div>
  )
}

Sections.propTypes = {
  goHome: PropTypes.bool,
}

Sections.defaultProps = {
  goHome: false,
}

export default Sections
