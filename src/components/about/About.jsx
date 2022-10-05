import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaBloggerB} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
          <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_card">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6 Month Working</small>
            </article>

            <article className='about__card'>
              <FaBloggerB className='about__icon'/>
              <h5>Blogs</h5>
              <small>20+ Blogs</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>
          <p>
          Passionate Web And App Developement and Postman Student Expert (APIs). A detail oriented and multitasking professional with exceptional coding in computer science technology. Comprehensive knowledge of primary development languages for instance C++, Javascript, React, Python and Cloud computing or Deep understanding regarding software development environments.
          </p>

          <a href="#contact" className='btn btn-1' >Let's Talk</a>
        </div>
      </div>
    </section>
    
  )
}

export default About
