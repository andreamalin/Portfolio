import React from 'react'
import PropTypes from 'prop-types'
import desktop from './images/desktop.png'
import ProjectInfo from './ProjectInfo'

const Desktop = ({
  tags, date, name, description, video, url, github,
}) => (
  <div className="desktop">
    <div className="desktopItems">
      <ProjectInfo
        date={date}
        name={name}
        tags={tags}
        description={description}
        url={url}
        github={github}
      />
      <video autoPlay loop muted src={video} />
    </div>
    <img src={desktop} alt="desktop" />
  </div>
)

Desktop.propTypes = {
  tags: PropTypes.arrayOf(String).isRequired,
  description: PropTypes.arrayOf(String).isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  url: PropTypes.string,
  github: PropTypes.string,
}

Desktop.defaultProps = {
  url: '',
  github: '',
}

export default Desktop
