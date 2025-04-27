'use client'
import {useState, useContext, useEffect} from 'react'
import { UserContext } from '@/context/userContext'
import { CurseProps } from '@/types/types'
import Image from 'next/image'

import './style.scss'

type CurseUrlProps = {
  url: string
}

export default function Curse({ url }:CurseUrlProps) {
  const [curseItem, setCurseItem] = useState<CurseProps | undefined>(undefined)

  const context = useContext(UserContext)
  if(!context) return
  const { courseList } = context

  useEffect(() => {
    function loadCurse() {
      console.log(courseList)
      console.log(url)
      const item = courseList.find((curse) => curse.url == url)
      setCurseItem(item)
    }

    loadCurse()
  }, [])

  return (
    <div className='curse_container'>
      <div className='curse_heading'>
        <Image src={curseItem?.ico} width={60} height={60} alt='logo python' />
        <h2>{curseItem?.title}</h2> 
        <span></span>
      </div>
      <p className='curse_description'>{curseItem?.description}</p>
      <div className='price_area'>
        <div className='price'>
          <p className='value'>{`R$ ${curseItem?.price}`}</p>
          <p className='date'>Esse curso começa em {curseItem?.created_at}</p>
        </div>
        <div className='price_btn'>
          <a href='#' className='purple_btn'>Comprar agora</a>
        </div>
      </div>
    </div>
  )
}
