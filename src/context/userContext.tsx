'use client'
import { useState, createContext, useContext} from 'react'
import { cursos, user } from '@/data/courses'
import { UserProps, CurseProps, ContextValueProps } from '@/types/types'

type UserProviderProps = {
  children: React.ReactNode
}

export const UserContext = createContext<ContextValueProps | undefined>(undefined)

export default function UserProvider ({ children }:UserProviderProps) {
  const [courseList, setCourseList] = useState<CurseProps[]>(cursos)
  const [userLogged, setUserLogged] = useState<UserProps>(user)

  return (
    <UserContext.Provider value={{ 
      courseList,
      userLogged
    }}>
      {children}
    </UserContext.Provider>
  )
}

export const UserHook = () => {
  const context = useContext(UserContext)
  if(!context) return
  return context
}
