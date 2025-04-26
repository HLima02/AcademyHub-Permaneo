import React from 'react'
import Link from 'next/link'
import { Heart } from 'lucide-react'

import './style.scss'

export default function Header() {
  return (
    <header className='header_container'>
      <h1>AcademyHub </h1>
      <span className='btn_favorites'>
        <Link href="#"><Heart /> Favoritos</Link>
      </span>
    </header>
  )
}
