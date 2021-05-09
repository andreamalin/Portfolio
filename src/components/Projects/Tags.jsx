import React from 'react'
import PropTypes from 'prop-types'

const Tags = ({ tags }) => (
  <ul className="tags">
    {tags.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
)

Tags.propTypes = {
  tags: PropTypes.arrayOf(String).isRequired,
}

export default Tags
