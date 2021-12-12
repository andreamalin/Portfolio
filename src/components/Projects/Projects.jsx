import React, { useState } from 'react'
import Desktop from './Desktop'
import netflixVideo from './images/Netflix.mp4'
import landerVideo from './images/Lander.mp4'
import somosVideo from './images/Somos.mp4'
import ahaVideo from './images/aha.mp4'
import './Projects.css'

/**
 * Projects info
 */
const ahaInfo = ['Indian subscription video streaming platform', 'Tech leader for Samsung (2017-2021 models) and LG (2017-2021 models) platforms', 'Developed our own smarttvs navigation library', 'WIDEVINE and PLAYREADY video players']
const ahaTags = ['Angular', 'Reuse Strategy', 'SCSS', 'Newrelic', 'Tizen', 'Web0S', 'Smart TVs']

const netflixInfo = ['Nav bar color change on scroll', 'Video autoplay on home and video autostop on scroll', 'Different actions on title hover']
const netflixTags = ['React', 'CSS']

const LanderInfo = ['Signup for free', 'Premium accounts with unlimited access to playlists and songs', 'Admin and moderator accounts with access to reports, update, and delete', 'Creator accounts with access to upload songs']
const landerTags = ['React', 'Express', 'PostgresSQL', 'CSS', 'Spotify API']

const SomosInfo = ['Website for registered members', 'All information and resources centralized in one website', 'Admin accounts with access to upload videos, images, doc, and others', 'Send and receive advertisements']
const somosTags = ['React', 'CSS', 'Express', 'Firebase', 'Newrelic']

/**
 * Creating desktop with projects
 */
const Projects = () => {
  const [actualDesktop, setActualDesktop] = useState({
    aha: true, netflix: false, lander: false, somos: false,
  })
  const [actualProject, setActualProject] = useState(0)

  const rigthButtonClick = () => {
    if (actualProject === 0) {
      setActualDesktop({ lander: true })
    } else if (actualProject === 1) {
      setActualDesktop({ somos: true })
    } else if (actualProject === 2) {
      setActualDesktop({ netflix: true })
    } else {
      setActualDesktop({ aha: true })
    }
    setActualProject((actualProject + 1) % 4)
  }

  const leftButtonClick = () => {
    if (actualProject === 3) {
      setActualDesktop({ lander: true })
    } else if (actualProject === 2) {
      setActualDesktop({ somos: true })
    } else if (actualProject === 1) {
      setActualDesktop({ netflix: true })
    } else {
      setActualDesktop({ aha: true })
    }
    setActualProject((actualProject + 1) % 4)
  }

  return (
    <div id="Projects">
      <button id="left" type="button" onClick={leftButtonClick}>⬅</button>
      {
        actualDesktop.aha ? <Desktop date="2021 - Present" name="aha 2.0" tags={ahaTags} description={ahaInfo} video={ahaVideo} url="https://play.google.com/store/apps/details?id=ahaflix.tv" /> : null
      }
      {
        actualDesktop.netflix ? <Desktop date="2021" name="Netflix on CSS" tags={netflixTags} description={netflixInfo} video={netflixVideo} github="https://github.com/andreamalin/Netflix" url="https://netflix-css-2021.web.app/" /> : null
      }
      {
        actualDesktop.lander ? <Desktop date="2021" name="Lander Music Streaming Service" tags={landerTags} description={LanderInfo} video={landerVideo} github="https://github.com/lauratamath/ReproductorMusical" /> : null
      }
      {
        actualDesktop.somos ? <Desktop date="2021" name="SOMOS GT" tags={somosTags} description={SomosInfo} video={somosVideo} url="https://somos-1eb3a.web.app/" /> : null
      }
      <button id="right" type="button" onClick={rigthButtonClick}>➡</button>
    </div>
  )
}

export default Projects
