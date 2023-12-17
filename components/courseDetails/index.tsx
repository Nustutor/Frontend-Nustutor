"use client"
import React from 'react'
import CourseListing from './courseListing';
import { usePathname } from 'next/navigation';

const CoursePage = () => {

  const title = decodeURIComponent(usePathname().split('/home/')[1]);

  return (
    <CourseListing
      Level="UG"
      Category="Computer Science"
      Title={title}
      CourseDescription="4 Credit Hour Course" 
      CourseHero={"/courseListing.png"}  />
  )
}

export default CoursePage;