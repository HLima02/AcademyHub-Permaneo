'use client'

import React, { useState, createContext, useContext, useEffect} from 'react'
import { cursos, user } from '@/data/courses'
import { UserProps, CurseProps, ContextValueProps } from '@/types/types'

type UserProviderProps = {
  children: React.ReactNode
}

//Cria o contexto para fornecer dados relacionados ao usuário e cursos 
export const UserContext = createContext<ContextValueProps | undefined>(undefined)

export default function UserProvider ({ children }:UserProviderProps) {
  const [courseList, setCourseList] = useState<CurseProps[]>(cursos)   //Armazena lista de cursos
  const [favoriteList, setFavoriteList] = useState<CurseProps[]>([])   //Armazena lista de cursos favoritos
  const [userLogged, setUserLogged] = useState<UserProps>(user)        //Armazena os dados do usuario logado

  useEffect(() => {
     // Recupera a lista de favoritos armazenada no localStorage ao inicializar o componente
      const storedFavorites = localStorage.getItem('@academy-hub')
      if(storedFavorites) setFavoriteList(JSON.parse(storedFavorites))
      
      // Função que atualiza a lista de cursos para marcar quais foram comprados pelo usuário 'purchased: true'
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
      localStorage.setItem('@academy-hub', JSON.stringify(favoriteList))  //Sempre que a lista de favoritos mudar, atualiza o localStorage
    }, [favoriteList])

  return (
    // Fornece os estados e funções para os componentes filhos através do contexto
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
