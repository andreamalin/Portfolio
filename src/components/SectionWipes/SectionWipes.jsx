import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'
import './sectionwipes.scss'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import ContactMe from '../ContactMe/ContactMe'
import Hobbies from '../Hobbies/Hobbies'

const SectionWipes2 = () => (
  <Controller>
    <Scene
      triggerHook="onLeave"
      duration="300%"
      pin
    >
      <Timeline
        wrapper={<div id="pinContainer" />}
      >
        <section className="panel"><Home /></section>
        <Tween
          from={{ x: '-100%' }}
          to={{ x: '0%' }}
        >
          <section className="panel"><Projects /></section>
        </Tween>
        <Tween
          from={{ x: '100%' }}
          to={{ x: '0%' }}
        >
          <section className="panel"><Projects isPersonalProjects /></section>
        </Tween>
        <Tween
          from={{ y: '-100%' }}
          to={{ y: '0%' }}
        >
          <section className="panel hobbies"><Hobbies /></section>
        </Tween>
        <Tween
          from={{ y: '100%' }}
          to={{ y: '0%' }}
        >
          <section className="panel contactme"><ContactMe /></section>
        </Tween>
      </Timeline>
    </Scene>
  </Controller>
)

export default SectionWipes2
