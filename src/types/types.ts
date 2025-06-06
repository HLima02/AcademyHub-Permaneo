import React, { ReactNode } from 'react'
import {StaticImageData } from 'next/image'

export type UserCurses = {
  courseId: number
  dateJoined: string
}

export type UserProps = {
  id: number
  name: string
  courses: UserCurses[]
}

export type CurseProps = {
  id: number
  title: string
  description: string
  price: number
  created_at: string,
  ico: StaticImageData,
  url: string,
  purchased?: boolean
}

export type ContextValueProps = {
  courseList: CurseProps[],
  favoriteList: CurseProps[],
  userLogged: UserProps,
  setFavoriteList: any
}