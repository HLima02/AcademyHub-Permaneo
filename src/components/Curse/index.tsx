'use client'
import {useState, useContext, useEffect} from 'react'
import { UserContext } from '@/context/userContext'
import { CurseProps } from '@/types/types'
import { CiHeart } from "react-icons/ci";
import Image from 'next/image'

import './style.scss'

type CurseUrlProps = {
  url: string
}

export default function Curse({ url }:CurseUrlProps) {
  const [curseItem, setCurseItem] = useState<CurseProps>([])

  const context = useContext(UserContext)
  if(!context) return
  const { courseList, favoriteList, setFavoriteList } = context

  useEffect(() => {
    function loadCurse() {
      console.log('Lista de favoritos: ', favoriteList)
      const item = courseList.find((curse) => curse.url == url)
      setCurseItem(item)
    }

    loadCurse()
  }, [])

  function handleFavorite({item}:any){
    console.log(favoriteList)
    const hasCurse = favoriteList.some(item => item.id == curseItem.id)
    if (!hasCurse) {
      setFavoriteList((prevFavorites:CurseProps[]) => [...prevFavorites, curseItem])
      alert('o item adicionado a lista')
    } else {
      alert('o item ja esta na lista')
    }
    console.log(favoriteList)
  }

  return (
    <div className='curse_container'>
      <div className='curse_heading'>
        <Image src={curseItem?.ico} width={60} height={60} alt='logo python' />
        <div className='title_favorite'>
          <h2>{curseItem?.title}</h2> 
          <span className='ico_favorite' onClick={handleFavorite}><CiHeart /></span>
        </div>
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
