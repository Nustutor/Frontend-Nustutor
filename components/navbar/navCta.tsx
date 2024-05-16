"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Loader from '../loader';

let uuid: string | null, token: string | null;
  if (typeof window !== 'undefined') {
    uuid = localStorage.getItem('userID');
    token = localStorage.getItem('token');
  }

const CTAs = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSClick = () => {
  setLoading(true);
  setTimeout(() => {
    if (uuid && token)
    {
      router.push('/home')
    }
    else{  
      router.push('/onboarding/signup')
    }
  }, 700);
  
  }
  const handleLClick = () => {
    setLoading(true);
    setTimeout(() => {
    if (uuid && token)
    {
      router.push('/home')
    }
    else{
      router.push('/onboarding/login')
    }
  }
  , 700);
  }
  return (
    <div>
      <div className="flex flex-col justify-start items-center flex-grow gap-4 md:hidden">
  {loading && <Loader LoaderText={'Loading'} />}
  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4 cursor-pointer" onClick={handleLClick}>
    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#111928]">
      Log In
    </p>
  </div>
  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-2 rounded-lg bg-[#7e3af2] cursor-pointer" onClick={handleSClick}>
    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-white">
      Get started
    </p>
  </div>
</div>

<div className="hidden md:flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4 cursor-pointer">
  <div> {loading && <Loader LoaderText={'Loading'} />}
  <div onClick={handleLClick}>
  <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#111928]">
    Log In
    </p>
    </div>
    </div>
  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-2 rounded-lg bg-[#7e3af2] cursor-pointer">
  <div> {loading && <Loader LoaderText={'Loading'} />}
    <div onClick={handleSClick}>
    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-white">
      Get started
    </p>
    </div>
    </div>
  </div>
</div>
</div>
  )
}

export default CTAs;


