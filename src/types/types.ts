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
  created_at: string
}

export type ContextValueProps = {
  courseList: CurseProps[],
  userLogged: UserProps,
}