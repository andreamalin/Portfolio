import React, { useState } from 'react'
import Desktop from './Desktop'
import netflixVideo from './images/Netflix.mp4'
import landerVideo from './images/Lander.mp4'
import somosVideo from './images/Somos.mp4'
import './Projects.css'

/**
 * Projects info
 */
const netflixInfo = ['Nav bar color change on scroll', 'Video autoplay on home and video autostop on scroll', 'Different actions on title hover']
const netflixTags = ['React', 'CSS']

const LanderInfo = ['Signup for free', 'Premium accounts with unlimited access to playlists and songs', 'Admin and moderator accounts with access to reports, update, and delete', 'Creator accounts with access to upload songs']
const landerTags = ['React', 'Express', 'PostgresSQL', 'CSS', 'Spotify API']

const SomosInfo = ['Website for registered members', 'All information and resources centralized in one website', 'Admin accounts with access to upload videos, images, doc, and others', 'Send and receive advertisements']
const somosTags = ['React', 'CSS', 'Express', 'PostgresSQL', 'Amazon S3']

/**
 * Creating desktop with projects
 */
const Projects = () => {
  const [actualDesktop, setActualDesktop] = useState({ netflix: true, lander: false, somos: false })
  const [actualProject, setActualProject] = useState(0)

  const rigthButtonClick = () => {
    if (actualProject === 0) {
      setActualDesktop({ lander: true })
    } else if (actualProject === 1) {
      setActualDesktop({ somos: true })
    } else {
      setActualDesktop({ netflix: true })
    }
    setActualProject((actualProject + 1) % 3)
  }

  const leftButtonClick = () => {
    if (actualProject === 2) {
      setActualDesktop({ lander: true })
    } else if (actualProject === 1) {
      setActualDesktop({ somos: true })
    } else {
      setActualDesktop({ netflix: true })
    }
    setActualProject((actualProject + 1) % 3)
  }

  return (
    <div id="Projects">
      <button id="left" type="button" onClick={leftButtonClick}>⬅</button>
      {
        actualDesktop.netflix ? <Desktop date="2021" name="Netflix on CSS" tags={netflixTags} description={netflixInfo} video={netflixVideo} github="https://github.com/andreamalin/Netflix" url="https://netflix-css-2021.web.app/" /> : null
      }
      {
        actualDesktop.lander ? <Desktop date="2021" name="Lander Music Reproductor" tags={landerTags} description={LanderInfo} video={landerVideo} github="https://github.com/lauratamath/ReproductorMusical" /> : null
      }
      {
        actualDesktop.somos ? <Desktop date="2021 - Present" name="SOMOS GT" tags={somosTags} description={SomosInfo} video={somosVideo} /> : null
      }
      <button id="right" type="button" onClick={rigthButtonClick}>➡</button>
    </div>
  )
}

export default Projects
