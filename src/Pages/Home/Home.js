import React from 'react'
import AboutMe from '../AboutMe/AboutMe'
import Banner from '../Banner/Banner'
import Blogs from '../Blogs/Blogs'
import Contact from '../Contact/Contact'
import ProjectsBody from '../Projects/ProjectsBody'
import Skills from '../Skills/Skills'

const Home = () => {
  return (
    <div>
        <Banner/>
        <ProjectsBody/>
        <Skills/>
        <Blogs/>
        <AboutMe/>
        <Contact/>
    </div>
  )
}

export default Home