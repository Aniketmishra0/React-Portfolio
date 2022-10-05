import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaDev} from 'react-icons/fa'
import {SiHashnode} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>My Portfolio</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#achievement">Achievement</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://linkedin.com/in/aniketmishra0" target="_blank" ><BsLinkedin/></a>
      <a href="https://github.com/aniketmishra0" target="_blank"><FaGithub/></a>
      <a href="https://twitter.com/aniketmishra0" target="_blank"><FaTwitter/></a>
      <a href="https://youtube.com/c/trickytechnotice" target="_blank"><FaYoutube/></a>
      <a href="https://dev.to/aniketmishra" target="_blank"><FaDev/></a>
      <a href="https://aniketmishra.hashnode.dev/" target="_blank"><SiHashnode/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Designed By Aniket Mishra</small>
      </div>

    </footer>
  )
}

export default Footer