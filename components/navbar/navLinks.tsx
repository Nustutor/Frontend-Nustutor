"use client"
import React from 'react'
import {useRouter} from 'next/navigation'

const Links = () => {

  

  const router = useRouter();
  const homeClick = () => {
    router.push('/home')
  }

  
  const featuresClick = () => {
    router.push('/')
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const aboutClick = () => {
    router.push('/')
    const aboutSection = document.getElementById('aboutus');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-start items-center flex-grow gap-8">
  <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative cursor-pointer"
  onClick = {homeClick}>
    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#111928]">
      Home
    </p>
  </div>
  <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative cursor-pointer"
  onClick = {featuresClick}>
    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#111928]">
      Features
    </p>
  </div>
  <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative cursor-pointer"
  onClick = {aboutClick}>
    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#111928]">
      About Us
    </p>
  </div>
  <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative cursor-pointer"
  onClick = {aboutClick}>
    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#111928]">
      Contact
    </p>
  </div>
</div>
  )
}

export default Links;