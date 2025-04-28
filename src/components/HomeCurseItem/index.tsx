import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import image from '../../assets/python_5968350.png'
import {StaticImageData } from 'next/image'
import { CurseProps } from '@/types/types'

type HomeCurseItemProps = {
  title: String
  description: string
  ico: StaticImageData,
  url: string,
  purchased?: boolean
}

import './style.scss'

export default function HomeCurseItem({title, description, ico, url, purchased}:HomeCurseItemProps) {

  return (
    <div className='curse_card'>
      <span className='card_title'>
        <Image src={ico} width={35} height={35} alt='logo python' />
        <p>{ title }</p>
      </span>
      <p className='description'>{ description }</p>
      <div className='card_curse_botton'>
        <Link className='purple_btn'  href={ purchased ? `/player/${url}` : `/curso/${url}`}>Acessar Curso</Link>
        {purchased && 
          <span>Comprado</span>
        }
        
      </div>
    </div>
  )
}
