import React from 'react'
import PropTypes from 'prop-types'
import List from './List'
import Tags from './Tags'
import Github from './images/github.png'
import ExternalUrl from './images/external-link.png'

const Project = ({
  date, name, tags, description, github, url,
}) => (
  <div className="project">
    <div className="links">
      { github ? (
        <a href={github} target="_blank" rel="noreferrer">
          <img src={Github} alt="Github" />
        </a>
      ) : ''}
      { url ? (
        <a href={url} target="_blank" rel="noreferrer">
          <img src={ExternalUrl} alt="External url" />
        </a>
      ) : ''}
    </div>
    <h5>{date}</h5>
    <h2>{name}</h2>
    <List list={description} />
    <Tags tags={tags} />
  </div>
)

Project.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(String).isRequired,
  description: PropTypes.arrayOf(String).isRequired,
  github: PropTypes.string,
  url: PropTypes.string,
}

Project.defaultProps = {
  github: '',
  url: '',
}

export default Project
