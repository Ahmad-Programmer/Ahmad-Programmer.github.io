import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Python.jpg'
import IMG2 from '../../assets/intro-to-AI-IBM.PNG'
import IMG3 from '../../assets/IBM-Watson.PNG'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Certificates</h5>
      <h2>Certificates</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Course In Python</h3>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Introduction to AI IBM</h3>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Building Chatbots IBM</h3>
        </article>

      </div>
    </section>
  )
}

export default Portfolio