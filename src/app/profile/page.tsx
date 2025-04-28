'use client'
import React, { useContext, useState, useEffect } from 'react'
import Image from 'next/image'
import profile from '@/assets/profile.png'
import ProfileCardSection from '@/components/ProfileCardSection'
import { UserContext } from '@/context/userContext'
import { CurseProps } from '@/types/types'
import './style.scss'

export default function Profile() {
  const context = useContext(UserContext)             //Obtem o contexto com a lista de curso e dados usuario
  if(!context) return <div>Carregando...</div>        //Caso o contexto ainda esteja vazio, retorna uma frase
  const { userLogged, courseList } = context          //destruturing do contexto

  return (
    <div className='profile_container'>
      <Image src={profile} width={250} height={250} alt='perfil' />
      <h2>{ userLogged.name }</h2>

      <ProfileCardSection user={userLogged} courseList={courseList}/>
    </div>
  )
}
