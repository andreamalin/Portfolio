import React from 'react'
import './Skills.css'
import CoffeeGraphs from './CoffeeGraphs'

const Skills = () => (
  <div id="skills">
    <div className="graphs">
      <CoffeeGraphs graphTitle="Photoshop" percentage={95} classNameGraphPer="show95" />
      <CoffeeGraphs graphTitle="Frontend" percentage={90} classNameGraphPer="show90" />
      <CoffeeGraphs graphTitle="UX" percentage={90} classNameGraphPer="show90" />
      <CoffeeGraphs graphTitle="SQL" percentage={80} classNameGraphPer="show80" />
    </div>
  </div>
)

export default Skills
