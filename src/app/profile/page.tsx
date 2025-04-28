'use client'
import { useContext, useState, useEffect } from 'react'
import Image from 'next/image'
import profile from '@/assets/profile.png'
import ProfileCardSection from '@/components/ProfileCardSection'
import { UserContext } from '@/context/userContext'
import { CurseProps } from '@/types/types'
import './style.scss'

export default function Profile() {
  const context = useContext(UserContext)
  if(!context) return <div>Carregando...</div>
  const { userLogged, courseList } = context

  return (
    <div className='profile_container'>
      <Image src={profile} width={250} height={250} alt='perfil' />
      <h2>{ userLogged.name }</h2>

      <ProfileCardSection user={userLogged} courseList={courseList}/>
    </div>
  )
}
