'use client'
import React, {useState, useContext, useEffect} from 'react'
import { UserContext } from '@/context/userContext'
import { CurseProps } from '@/types/types'
import { CiHeart } from "react-icons/ci";
import Image from 'next/image'
import { toast } from 'react-toastify';
import './style.scss'

// Define as propriedades que o componente espera receber
type CurseUrlProps = {
  url: string
}

export default function Curse({ url }:CurseUrlProps) {
  const [curseItem, setCurseItem] = useState<CurseProps>([])    //Estado para armazenar o curso carregado

  const context = useContext(UserContext)                       //Obtem o contexto com a lista de curso e dados usuario
  if(!context) return <div>Carregando...</div>                  //Caso o contexto ainda esteja vazio, retorna uma frase
  const { courseList, favoriteList, setFavoriteList } = context //destruturing do contexto

  useEffect(() => {
    // Função para carregar o curso baseado na URL recebida
    function loadCurse() {
      const item = courseList.find((curse) => curse.url == url)
      setCurseItem(item)
    }

    loadCurse()
  }, [])

  // Função para adicionar o curso aos favoritos
  function handleFavorite({item}:any){
    console.log(favoriteList)
    const hasCurse = favoriteList.some(item => item.id == curseItem.id)                 //Verifica se o curso já existe na lista
    if (!hasCurse) {
      setFavoriteList((prevFavorites:CurseProps[]) => [...prevFavorites, curseItem])
      toast.success('Curso adicionado aos favoritos!')
    } else {
      toast.warning('Este curso já esta na lista de favoritos!')
    }
  }

  return (
    <div className='curse_container'>
      <div className='curse_heading'>
        <Image src={curseItem?.ico} width={60} height={60} alt='logo python' />
        <div className='title_favorite'>
          <h2>{curseItem?.title}</h2> 
          <span className='ico_favorite' onClick={handleFavorite}><CiHeart /></span>
        </div>
      </div>
      <p className='curse_description'>{curseItem?.description}</p>
      <div className='price_area'>
        <div className='price'>
          <p className='value'>{`R$ ${curseItem?.price}`}</p>
          <p className='date'>Esse curso começa em {curseItem?.created_at}</p>
        </div>
        <div className='price_btn'>
          <a href='#' className='purple_btn'>Comprar agora</a>
        </div>
      </div>
    </div>
  )
}
