'use client'
import React, { useContext } from 'react'
import { CurseProps } from '@/types/types'
import { FaRegTrashAlt } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link'
import { UserContext } from '@/context/userContext'
import { toast } from 'react-toastify';
import './style.scss'

type FavoriteListProps = {
  list: CurseProps[]
}

export default function FavoriteList({ list }:FavoriteListProps ) {
  const context = useContext(UserContext)
  if(!context) return <div>Carregando...</div>
  const { favoriteList, setFavoriteList } = context

  function handleDeleteFavorite( id:number ){
    const auxlist = favoriteList.filter((item) => item.id !== id)
    setFavoriteList(auxlist)
    toast.success('Curso removido da lista de favoritos!')
  }

  return (
    <div className='favorite_list_section'>
      <h1>Listade favoritos</h1>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <Image src={item.ico} width={40} height={40} alt={item.title} />
            <span className='title'>{item.title}</span>
            <Link className='purple_btn' href={`/curso/${item.url}`}>Acessar curso</Link>
            <span><FaRegTrashAlt onClick={() => handleDeleteFavorite(item.id)} /></span>
          </li>
        ))}
      </ul>
      
    </div>
  )
}
