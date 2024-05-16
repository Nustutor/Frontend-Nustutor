import React from 'react'
import Links from './links';
import FooterBottom from './footerBottom';

const Footer = () => {
  return (
    <div>
    <div className="w-[350px] flex flex-col justify-start items-center flex-grow-0 flex-shrink-0  bg-white md:hidden">
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-16 py-16">
    <Links/>
    <FooterBottom/>
    </div>
    </div>

  <div className="hidden md:flex flex-col justify-start items-center flex-grow-0 flex-shrink-0  bg-white">
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-16 py-16">
    <Links/>
    <FooterBottom/>
    </div>
    </div>
    </div>
  )
}

export default Footer;