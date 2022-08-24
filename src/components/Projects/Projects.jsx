/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import Dragable from './Dragable'
import './project.scss'

const netflix = ['Nav bar color change on scroll', 'Video autoplay on home and video autostop on scroll', 'Different actions on title hover']
const aha = ['Indian subscription video streaming platform with 6M subscribers on smarttvs', 'Developed Samsung (2017-2021) and LG (2017-2021) platforms', 'Developed navigation library', 'WIDEVINE and PLAYREADY video players']
const lander = ['Signup for free', 'Premium accounts with unlimited access to playlists and songs', 'Admin and moderator accounts with access to reports, update, and delete', 'Creator accounts with access to upload songs', 'Spotify API']
const somos = ['Website for registered members', 'All information and resources centralized in one website', 'Admin accounts with access to upload videos, images, doc, and others', 'Send and receive advertisements']
const whitelabel = ['Live tv streaming platform', 'Schedule on real time', 'Visualize schedule based on days', 'See program information of future programs', 'Watch current programs on live']
const teatrix = ['Theader plays streaming platform', 'Full app redesign', 'Developed Samsung (2017-2021) and LG (2017-2021) platforms', 'Javascript and JQuery']

const Projects = ({ isPersonalProjects }) => (
  <div className={`projects ${isPersonalProjects ? 'blue' : ''}`}>
    <div className={isPersonalProjects ? 'personal-projects' : 'biggest-projects'} />

    {
    isPersonalProjects
      ? (
        <>
          <Dragable name="netflix" title="Netflix built with React and Css - 2021" information={netflix} githubUrl="https://github.com/andreamalin/Netflix" externalUrl="https://netflix-css-2021.web.app/" />
          <Dragable name="lander" title="Lander Music Streaming Service - 2021" information={lander} githubUrl="https://github.com/lauratamath/ReproductorMusical" />
          <Dragable name="somos" title="Somos - 2021" information={somos} externalUrl="https://somos-1eb3a.web.app/" />
        </>
      )
      : (
        <>
          <Dragable name="aha" title="aha 2.0 - 2021 Tech Leader and Dev" information={aha} externalUrl="https://play.google.com/store/apps/details?id=ahaflix.tv" />
          <Dragable name="whitelabel" title="Live TV Streaming Platform - 2022 Tech Leader and Dev" information={whitelabel} />
          <Dragable name="teatrix" title="Teatrix Streaming Platform - 2022 Tech Leader and Dev" information={teatrix} />
        </>
      )
    }

  </div>
)

Projects.propTypes = {
  isPersonalProjects: PropTypes.bool,
}

Projects.defaultProps = {
  isPersonalProjects: false,
}

export default Projects
