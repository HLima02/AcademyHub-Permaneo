import PlayerComponent from '@/components/Player'
import './style.scss'

type PlayerProps = {
  params: {
    name: string
  }
}

export default function Player({ params }:PlayerProps) {
  const { name } = params

  return (
    <div className='player_container'>
      <PlayerComponent url={name} />
    </div>
  )
}
