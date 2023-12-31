"use client"
import React, { useState } from 'react'
import {useRouter} from 'next/navigation'
import Loader from '../loader';

const Links = () => {

  const [loading, setLoading] = useState(false);

  let uuid: string | null, token: string | null;
  if (typeof window !== 'undefined') {
    uuid = localStorage.getItem('userID');
    token = localStorage.getItem('token');
  }

  const router = useRouter();
  const homeClick = () => {
    setLoading(true);
    setTimeout(() => {    
    if (uuid && token) {
      router.push('/home')
    }
    else
    {
      router.push('/onboarding/signup')
    }
  }, 1000);
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
      <div>{loading && <Loader LoaderText={'Loading'} />}
  <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative cursor-pointer"
  onClick = {homeClick}>
    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#111928]">
      Home
    </p>
  </div>
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