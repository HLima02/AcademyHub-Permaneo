import React from 'react'
import Curse from '@/components/Curse'
import { notFound } from 'next/navigation'

//Define as propriedades esperadas na página
interface CursePageProps {
  params: {
    name: string
  }
}

const CursePage = async({ params }: CursePageProps) => {
  const { name } = params
  // Se não existir 'name' nos parâmetros, redireciona para a página de "404 Not Found"
  if (!name) {
    notFound() 
  }

  return (
    <div>
      {/* Redireciona o componente 'Curse' passando a URL */}
      <Curse url={`/${name}`} />
    </div>
  )
}

export default CursePage
