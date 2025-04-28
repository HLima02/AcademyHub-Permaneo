import React from 'react'
import PlayerComponent from '@/components/Player'
import { notFound } from 'next/navigation' 

type PlayerProps = {
  params: {
    name: string
  }
}

const Player = async ({ params }: PlayerProps) => {
  const { name } = params

  if (!name) {
    notFound() 
  }

  return (
    <div className="player_container">
      <PlayerComponent url={name} />
    </div>
  )
}

export default Player
