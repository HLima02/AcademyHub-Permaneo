import React from 'react'
import Curse from '@/components/Curse'

type CursePageProps = {
  params: {
    name: string
  }
}

export default function CursePage({ params }:CursePageProps ) {
  const { name } = params

  return (
    <div>
      <Curse url={`/${name}`} />
    </div>
  )
}
