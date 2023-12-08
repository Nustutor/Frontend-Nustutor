import React from 'react'
import CourseListing from './courseListing';

const CoursePage = () => {
  return (
    <CourseListing
      Level="UG"
      Category="Computer Science"
      Title={`Programming Fundamentals`}
      CourseDescription="4 Credit Hour Course" 
      CourseHero={"/courseListing.png"}  />
  )
}

export default CoursePage;