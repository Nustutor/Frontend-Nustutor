import TutorNav from '@/components/offerings/tutorNav'
import TutorVerify from '@/components/offerings/tutorVerify';
import React from 'react'

const Tutor = () => {
  return (
    <div>
      <div className="w-auto h-[1240px] relative overflow-hidden bg-white md:hidden">
    <TutorNav/>
    <TutorVerify/>
    </div>
    <div className="hidden md:flex w-[1440px] h-[1240px] relative overflow-hidden bg-white">
    <TutorNav/>
    <TutorVerify/>
    </div>
    </div>
  )
}

export default Tutor;