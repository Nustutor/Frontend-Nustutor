'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Logout from '../logout';

const TutorNav = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/home')

  }
  return (
    <div>
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-4 md:hidden">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-1 cursor-pointer">
          <img
            src="/profile.png"
            className="flex-grow-0 flex-shrink-0 w-[37px] h-[39px] rounded-[9099px] object-none"
          />
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-2 rounded-lg bg-[#5508d8] cursor-pointer"
        onClick={handleClick}>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-white">
            Switch to Learning
          </p>
        </div>
        
      </div>
      <div className="hidden md:flex justify-start items-center flex-grow-0 flex-shrink-0 gap-4" style={{ paddingLeft: "38rem" }}>
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-1 cursor-pointer">
          <img
            src="/profile.png"
            className="flex-grow-0 flex-shrink-0 w-[37px] h-[39px] rounded-[9099px] object-none"
          />
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-2 rounded-lg bg-[#5508d8] cursor-pointer"
        onClick={handleClick}>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-white">
            Switch to Learning
          </p>
        </div>
      </div>
      </div>
  )
}

export default TutorNav;