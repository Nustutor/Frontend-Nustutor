'use client'
import React from 'react'
import {usePathname, useRouter} from 'next/navigation'

const TutorCTA = ({showButton}) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = () => {
    router.push(pathname+'/viewall')
  }
  return (
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden bg-white">
      {showButton && (
        <div
          className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[191px] h-[55px] relative overflow-hidden px-5 py-3 rounded-lg bg-[#7935ef] border border-gray-200 cursor-pointer"
          onClick={handleClick}
        >
          <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-white">
            View More
          </p>
        </div>
      )}
    </div>
  )
}

export default TutorCTA;