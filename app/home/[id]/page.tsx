import CoursePage from '@/components/courseDetails'
import CourseTutors from '@/components/courseDetails/courseTutors'
import Footer from '@/components/footer'
import HeroNavbar from '@/components/navbar/heroNav'
import React from 'react'

export default function Home() {
    return (
      <div className="flex flex-col justify-start bg-white">  
    <HeroNavbar/>
    <CoursePage/>
    <CourseTutors/>
    <Footer/>
      </div>
    )
    }