import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://twitter.com" target="_blank"><AiOutlineTwitter/></a>
    </div>
  )
}

export default HeaderSocials