import React from 'react'
import Logo from './logo';
import Links from './navLinks';
import HeroCTA from './heroCTA';

const HeroNavbar = () => {
  return (
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 py-6 m-2 p-16">
    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-8">
        <Logo/>
        <Links/>
        <HeroCTA/>
    </div>
    </div>
  )
}

export default HeroNavbar;