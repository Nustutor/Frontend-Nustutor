import Footer from '@/components/footer'
import HeroNavbar from '@/components/navbar/heroNav'
import Offering from '@/components/offerings'
import React from 'react'

const CourseOffering = () => {
  return (
    <div>
    <HeroNavbar/>
    <Offering subject={undefined} title={"Hadi"} description={undefined} rate={undefined} tutorName={undefined} tutorAbout={undefined}/>
    <Footer/>
    </div>
  )
}

export default CourseOffering;