import React from 'react'
import './about.css'
// import ME from '../../assets/me2.png'
import UN from '../../assets/King.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {RiFolder2Line} from 'react-icons/ri'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            {/* <img src={ME} alt="" /> */}
            <img src={UN} alt="" />
          </div>

        </div>
        <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Education</h5>
                <small>KSU Software Engineer</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Internship</h5>
                <small>Thiqah</small><br/>
                <small>AEC SAMI</small>
              </article>

              <article className='about__card'>
                <RiFolder2Line className='about__icon'/>
                <h5>Projects</h5>
                <small>Flutter Cryptocurrency</small>
              </article>

            </div>

            <p>
            I am interested in the field of programming and cybersecurity, and have passion in artificial intelligence algorithms and techniques. I have great knowledge in different programming languages (Java and Python), and familiar with world of technology and its latest developments. I always aspire to the best.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about