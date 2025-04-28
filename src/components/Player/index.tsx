'use client'
import React, { useState, useContext, useEffect} from 'react'
import { UserContext } from '@/context/userContext'
import { CurseProps } from '@/types/types'

import './style.scss'

// Define as propriedades que o componente espera receber
type PlayerComponentProps = {
  url: string
}

export default function PlayerComponent({ url }: PlayerComponentProps) {
  const [playedCurse, setPlayedCurse] = useState<CurseProps>()                //Estado para armazenar o curso carregado
  
  const context = useContext(UserContext)                                     //Obtem o contexto com a lista de curso e dados usuario
  if(!context) return <div>Carregando...</div>                                //Caso o contexto ainda esteja vazio, retorna uma frase
  const { courseList } = context                                              //destruturing do contexto

  useEffect(() => {
    let auxList = courseList.find((item) => item.url == `/${url}`)            //Busca o curso correspondente pela URL
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
