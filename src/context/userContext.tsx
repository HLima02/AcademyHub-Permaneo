'use client'

import React, { useState, createContext, useContext, useEffect} from 'react'
import { cursos, user } from '@/data/courses'
import { UserProps, CurseProps, ContextValueProps } from '@/types/types'
import { json } from 'stream/consumers'

type UserProviderProps = {
  children: React.ReactNode
}

export const UserContext = createContext<ContextValueProps | undefined>(undefined)

export default function UserProvider ({ children }:UserProviderProps) {
  const [courseList, setCourseList] = useState<CurseProps[]>(cursos)
  const [favoriteList, setFavoriteList] = useState<CurseProps[]>([])
  const [userLogged, setUserLogged] = useState<UserProps>(user)

  useEffect(() => {
      const storedFavorites = localStorage.getItem('@academy-hub')
      if(storedFavorites) setFavoriteList(JSON.parse(storedFavorites))
      

      function loadCursesPurchased() {
        const cursosAtualizados = courseList.map((curso) => {
          const purchased = userLogged.courses.some((userCurse) => userCurse.courseId === curso.id)
          return {
            ...curso,
            purchased
          }
        })
  
        setCourseList(cursosAtualizados)
      }
  
      loadCursesPurchased()
    }, [])

    useEffect(() => {
      localStorage.setItem('@academy-hub', JSON.stringify(favoriteList))

    }, [favoriteList])

  return (
    <UserContext.Provider value={{ 
      courseList,
      userLogged,
      favoriteList,
      setFavoriteList
    }}>
      {children}
    </UserContext.Provider>
  )
}
