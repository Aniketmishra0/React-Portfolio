import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaDev} from 'react-icons/fa'
import {SiHashnode} from 'react-icons/si'


const HeaderSocial = () => {
  return (
    <div className='header__social'>
      <a href="https://linkedin.com/in/aniketmishra0" target="_blank" ><BsLinkedin/></a>
      <a href="https://github.com/aniketmishra0" target="_blank"><FaGithub/></a>
      <a href="https://twitter.com/aniketmishra0" target="_blank"><FaTwitter/></a>
      <a href="https://youtube.com/c/trickytechnotice" target="_blank"><FaYoutube/></a>
      <a href="https://dev.to/aniketmishra" target="_blank"><FaDev/></a>
      <a href="https://aniketmishra.hashnode.dev/" target="_blank"><SiHashnode/></a>
   </div>
  )
}

export default HeaderSocial