"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const CTAs = () => {
  const router = useRouter();
  const handleSClick = () => {
    router.push('/onboarding/signup')
  }
  const handleLClick = () => {
    router.push('/onboarding/login')
  }
  return (
<div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4 cursor-pointer">
  <div onClick={handleLClick}>
  <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#111928]">
    Log In
    </p>
    </div>
  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-2 rounded-lg bg-[#7e3af2] cursor-pointer">
    <div onClick={handleSClick}>
    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-white">
      Get started
    </p>
    </div>
  </div>
</div>
  )
}

export default CTAs;


