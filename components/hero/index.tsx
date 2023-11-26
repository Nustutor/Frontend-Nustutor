import React from 'react'
import HeroImage from './heroImage';

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-[1440px] overflow-hidden bg-white">
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1440px] py-16">
    <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 w-[1280px] gap-24">
      <div className="flex flex-col justify-start items-start flex-grow gap-10">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-6">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[736px] text-6xl font-black text-left text-[#111928]">
            Tutoring Platform for students, by students
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[736px] text-xl text-left text-gray-500">
            Nustutor aims to simplify university learning by providing a platform for students
            struggling in university, to learn from other students.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-12 relative overflow-hidden px-5 py-3 rounded-lg bg-[#7e3af2]">
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
                Sign up for free
              </p>
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-12 relative overflow-hidden px-5 py-3 rounded-lg border border-gray-200">
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1f2a37]">
                Pricing &amp; FAQ
              </p>
            </div>
          </div>
        </div>
      </div>
    <HeroImage/>
    </div>
  </div>
</div>
  )
}

export default Hero;