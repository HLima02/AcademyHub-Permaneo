'use client'
import React, {useState, useEffect} from 'react'

import { UserProps, CurseProps } from '@/types/types'
import HomeCurseItem from '@/components/HomeCurseItem'

import './style.scss'

type ProfileCardSectionProps = {
  user: UserProps,
  courseList: CurseProps[]
}

export default function ProfileCardSection({ user, courseList }:ProfileCardSectionProps) {
  const [purchasedList, setPurchasedList] = useState<CurseProps[]>([])

  useEffect(() => {
    function checkList(){
      const purchasedCourses = courseList.filter(item => item.purchased)
      setPurchasedList(purchasedCourses)
    }
    
    checkList()
    }, [courseList])
  return (
    <section className='profile_curse_section'>
      <h3>Meu cursos</h3>

      <div className='profile_cards'>
        {purchasedList.map((item) => (
          <HomeCurseItem key={item.id} title={item.title} description={item.description} ico={item.ico} url={item.url} />
        ))}
      </div>
    </section>
  )
}
