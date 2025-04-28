import React from 'react'
import PlayerComponent from '@/components/Player'
import { notFound } from 'next/navigation' 

//Define as propriedades esperadas na página
type PlayerProps = {
  params: {
    name: string
  }
}

const Player = async ({ params }: PlayerProps) => {
  const { name } = params
  // Se não existir 'name' nos parâmetros, redireciona para a página de "404 Not Found"
  if (!name) {
    notFound() 
  }

  return (
    <div className="player_container">
      {/* Redireciona o componente 'PlayerComponent' passando a URL */}
      <PlayerComponent url={name} />
    </div>
  )
}

export default Player
