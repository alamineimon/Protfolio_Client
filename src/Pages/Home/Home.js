import React from 'react'
import Banner from '../Banner/Banner'
import Contact from '../Contact/Contact'
import ProjectsBody from '../Projects/ProjectsBody'
import Skills from '../Skills/Skills'

const Home = () => {
  return (
    <div>
        <Banner/>
        <ProjectsBody/>
        <Skills/>
        <Contact/>
    </div>
  )
}

export default Home