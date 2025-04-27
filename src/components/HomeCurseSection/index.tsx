'use client'
import { useState, useContext } from 'react'
import { UserContext } from '@/context/userContext'
import HomeCurseItem from '@/components/HomeCurseItem'
import './style.scss'

export default function HomeCurseSection() {
  const context = useContext(UserContext)
  if(!context) return
  const { courseList } = context

  console.log(courseList)
  return (
    <div className='Home_curses_container'>
      <h2>Nossos cursos</h2>
      <div className='card_section'>
        {courseList.map(item => (
          <HomeCurseItem key={item.id} title={item.title} description={item.description} ico={item.ico} url={item.url} />
        )) }
      </div>
    </div>
  )
}
