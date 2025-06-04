import React from 'react'
import richardKiddLogo from '../assets/richardKiddLogo.webp'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={richardKiddLogo} className="width=[1%] height=[33px]" alt="Logo"/> 
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="#"></a>
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="#" target="_blank" aria-label="LinkedIn"> < FaLinkedin/> </a>
            <a href="#" target="_blank" aria-label="GitHub"> < FaGithub/> </a>
        </div>


    </nav>
  )
}

export default Navbar