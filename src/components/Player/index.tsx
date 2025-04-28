'use client'
import React, { useState, useContext, useEffect} from 'react'
import { UserContext } from '@/context/userContext'
import { CurseProps } from '@/types/types'

import './style.scss'

type PlayerComponentProps = {
  url: string
}

export default function PlayerComponent({ url }: PlayerComponentProps) {
  const [playedCurse, setPlayedCurse] = useState<CurseProps>()
  const context = useContext(UserContext)

  if(!context) return <div>Carregando...</div>
  const { courseList } = context

  useEffect(() => {
    let auxList = courseList.find((item) => item.url == `/${url}`)
    setPlayedCurse(auxList)
  }, [])

  return (
    <div className='player_section'>
      <h2>{playedCurse?.title}</h2>
      <div >
        <video width="100%" controls>
          <source src="" type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>

        <div className='btn_area_player'>
          <button className='purple_btn'>Continuar curso</button>
          <button className='purple_btn'>Reiniciar curso</button>
        </div>
      </div>
    </div>
  )
}
