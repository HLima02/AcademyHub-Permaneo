import React from 'react'
import Curse from '@/components/Curse'
import { notFound } from 'next/navigation'

interface CursePageProps {
  params: {
    name: string
  }
}

const CursePage = async({ params }: CursePageProps) => {
  const { name } = params
  if (!name) {
    notFound() 
  }

  return (
    <div>
      <Curse url={`/${name}`} />
    </div>
  )
}

export default CursePage
