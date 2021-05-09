import React from 'react'
import PropTypes from 'prop-types'
import List from './List'
import Tags from './Tags'

const Project = ({
  date, name, tags, description,
}) => (
  <div className="project">
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
}

export default Project
