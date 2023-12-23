import TutorNav from '@/components/offerings/tutorNav'
import TutorVerify from '@/components/offerings/tutorVerify';
import React from 'react'

const Tutor = () => {
  return (
    <div className="w-[1440px] h-[1240px] relative overflow-hidden bg-white">
    <TutorNav/>
    <TutorVerify/>
    </div>
  )
}

export default Tutor;