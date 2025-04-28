'use client'
import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '@/context/userContext'
import FavoriteList from '@/components/FavoriteList'
import Link from 'next/link'

import './style.scss'

export default function FavotesPage() {
  const context = useContext(UserContext)             //Obtem o contexto com a lista de curso e dados usuario
  if(!context) return <div>Carregando...</div>        //Caso o contexto ainda esteja vazio, retorna uma frase
  const { favoriteList } = context                    //destruturing do contexto

  return (
    <div className='favorite_container'>
      {favoriteList.length > 0 ? (
        <FavoriteList list={favoriteList} />
      ) : (
        <div className='empty_list'>
          <h2>Lista de favoritos</h2>
          <p>Sua lista de favoritos ainda esta vazia. Que tal navegar pelos cursos e favoritar alguns?</p>
          <Link className='purple_btn' href="/">Página de cursos</Link>
        </div>
      )}
      
    </div>
  )
}
