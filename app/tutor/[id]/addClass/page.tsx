import TutorDashboard from '@/components/dashboard/Tindex'
import AddClass from '@/components/dashboard/addClass'
import TutorNavbar from '@/components/navbar/tutorNavbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <TutorNavbar/>
      <AddClass/>
    </div>
  )
}

export default page