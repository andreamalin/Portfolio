import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Game from './components/Game/Game'
import AboutMe from './components/PersonalInfo/AboutMe'
import Projects from './components/Projects/Projects'
import ContactMe from './components/ContactMe/ContactMe'
import ProjectInfo from './components/Projects/ProjectInfo'
import './index.css'
import Return from './components/Game/Return'

const Home = () => (
  <div>
    <Game />
    <AboutMe />
    <Return actualArea="house1" goHome />
    <Projects />
    <Return actualArea="house2" goHome />
    <ContactMe />
    <Return actualArea="house3" goHome />
  </div>
)

const App = () => (
  <Router>
    <Switch>
      <Route path="/IgRedesign" component={ProjectInfo} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
