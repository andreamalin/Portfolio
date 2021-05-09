import React from 'react'
import PropTypes from 'prop-types'
import useScreen from '../Observer'

const CoffeeGraph = ({ graphTitle, percentage, classNameGraphPer }) => {
  const ref = React.useRef()
  const observer = useScreen(ref, 0.5)
  return (
    <div className="graph">
      <div ref={ref} className={`coffeeCup ${observer ? classNameGraphPer : 'emptyCup'}`}>
        <div className="top2" />
        <div className="top" />
        <div className="cup" />
      </div>
      <h2>{percentage}</h2>
      <h2>{graphTitle}</h2>
    </div>
  )
}

CoffeeGraph.propTypes = {
  graphTitle: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  classNameGraphPer: PropTypes.string.isRequired,
}

export default CoffeeGraph
