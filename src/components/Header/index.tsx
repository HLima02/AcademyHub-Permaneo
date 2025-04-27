import React from 'react'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { CgProfile } from "react-icons/cg";

import './style.scss'

export default function Header() {
  return (
    <header className='header_container'>
      <Link href="/"><h1>AcademyHub </h1></Link>
      <div className='header_btn'>
        <span className='btn_favorites'>
          <Link href="#"><Heart /> Favoritos</Link>
        </span>
        <Link className='profile' href="/profile"><CgProfile size={40} /></Link>
      </div>
    </header>
  )
}
