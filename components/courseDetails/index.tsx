"use client"
import React from 'react'
import CourseListing from './courseListing';
import { usePathname } from 'next/navigation';

const CoursePage = () => {

  const url = decodeURIComponent(usePathname().split('/home/')[1]);
  const parts = url.split('+')
  const title = parts[0];
  const category = parts[1];


  return (
    <CourseListing
      Level="UG"
      Category={category}
      Title={title}
      CourseDescription="4 Credit Hour Course" 
      CourseHero={"/courseListing.png"}  />
  )
}

export default CoursePage;