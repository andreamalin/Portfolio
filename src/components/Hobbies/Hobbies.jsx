import React from 'react'
import './Hobbies.css'
import gihbli from './gihbli.png'

const Hobbies = () => (
  <div id="hobbies">
    <ul id="list">
      <h1>HOBBIES</h1>
      <li>👾 Pixel art</li>
      <li>🍞 Baking desserts and bread</li>
      <li>👀 Watching anime</li>
      <li>☕ Drinking coffee</li>
      <li>🥞 Eating pancakes</li>
    </ul>
    <img className="gihbli" src={gihbli} alt="gihbli" />
  </div>
)

export default Hobbies
