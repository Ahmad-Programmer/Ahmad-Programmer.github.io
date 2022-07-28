import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {SiLinkedin} from 'react-icons/si'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cbo32o1', 'template_jcbvs6c', form.current, 'ZbOJZF1viRTPNqN7A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();  
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Ahmad.alswailem15@gmail.com</h5>
            <a href="mailto:Ahmad.alswailem15@gmail.com"target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <SiLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Ahmad.alswailem15@gmail.com</h5>
            <a href="https://www.linkedin.com/in/ahmed-alswailem-5bb7b3219" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+966561000783</h5>
            <a href="https://wa.me/966561000783" target='_blank'>Send a Message</a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact