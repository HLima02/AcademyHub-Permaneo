'use client'
import { useState, useContext } from 'react'
import { UserContext } from '@/context/userContext'


export default function HomeCurseSection() {
  const context = useContext(UserContext)
  if(!context) return
  const { courseList } = context

  console.log(courseList)
  return (
    <div>
      <h2>Seção de cursos</h2>
    </div>
  )
}
