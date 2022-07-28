import React from 'react'
import './footer.css'
import {SiLinkedin} from 'react-icons/si'
import {AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ahmed</a>

      <ul className='links'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
       </ul>

       <div className="footer__socials">
        <a href="https://linkedin.com"><SiLinkedin/></a>
        <a href="https://twitter.com"><AiOutlineTwitter/></a>
       </div>
    </footer>
  )
}

export default Footer