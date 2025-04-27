import React from 'react'

type CursePageProps = {
  params: {
    name: string
  }
}

export default function CursePage({ params }:CursePageProps ) {
  const { name } = params
  console.log(name)
  return (
    <div>
      <h1>Página inicial do curso</h1>
    </div>
  )
}
