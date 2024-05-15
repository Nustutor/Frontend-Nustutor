'use client'

import React, { useState } from 'react'
import HeroImage from './heroImage';
import { useRouter } from 'next/navigation';
import Loader from '../loader';

const Hero = () => {

  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const handleSClick = () => {
    setLoading(true);
    setTimeout(() => {
      router.push('/onboarding/signup');
    }, 700);
  }
  
  return (
    <div className='flex flex-col justify-start items-center'>
      <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 w-full md:w-[1440px] overflow-hidden bg-white">
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-full md:w-[1440px] py-16 px-4 md:px-0">
          <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 w-full md:w-[1280px] gap-6 md:gap-24">
            <div className="flex flex-col justify-start items-start flex-grow gap-6 md:gap-10">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-6">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-full md:w-[736px] text-3xl md:text-6xl font-black text-left text-[#111928]">
                  Tutoring Platform for students, by students
                </p>
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-full md:w-[736px] text-base md:text-xl text-left text-gray-500">
                  Nustutor aims to simplify university learning by providing a platform for students
                  struggling in university, to learn from other students.
                </p>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2 cursor-pointer">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-12 w-full md:w-auto relative overflow-hidden px-5 py-3 rounded-lg bg-[#7e3af2]"
                onClick={handleSClick}>
                  <p className="flex-grow-0 flex-shrink-0 text-sm md:text-base font-medium text-left text-white">
                    Sign up for free
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex">
            <HeroImage/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );  
}

export default Hero;