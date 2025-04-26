import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin  } from "react-icons/fa";

import './style.scss'

export default function Footer() {
  return (
    <footer>
      <div className='footer_content'>
        <div className='footer_links_area'>
          <Link target='_blanc' href='https://github.com/HLima02?tab=repositories'><FaGithub/></Link>
          <Link target='_blanc' href='https://www.linkedin.com/in/hiago-lima-27867012b/'><FaLinkedin/></Link>
        </div>
        <p>Desenvolvido por Hiago Lima &copy;2025</p>
      </div>
    </footer>
  )
}
