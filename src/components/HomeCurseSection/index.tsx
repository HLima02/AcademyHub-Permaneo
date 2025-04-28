'use client'
import React, { useState, useContext } from 'react'
import { UserContext } from '@/context/userContext'
import HomeCurseItem from '@/components/HomeCurseItem'
import './style.scss'

export default function HomeCurseSection() {
  const context = useContext(UserContext)          //Obtem o contexto com a lista de curso e dados usuario
  if(!context) return <div>Carregando...</div>     //Caso o contexto ainda esteja vazio, retorna uma frase
  const { courseList } = context                   //destruturing do contexto

  return (
    <div className='Home_curses_container'>
      <h2>Nossos cursos</h2>
      <div className='card_section'>
        {/* Iterações passando as infos de cada item para o componente 'HomeCurseItem' */}
        {courseList.map(item => (
          <HomeCurseItem 
          key={item.id} 
          title={item.title} 
          description={item.description} 
          ico={item.ico} 
          url={item.url}
          purchased={item.purchased} />
        )) }
      </div>
    </div>
  )
}
