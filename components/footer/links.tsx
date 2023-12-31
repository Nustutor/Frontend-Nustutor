"use client"
import React from 'react'
import {useRouter} from 'next/navigation'

const Links = () => {

  const router = useRouter();

  const privacyClick = () => {
    router.push('/legal/privacy')
  }

  const tncClick = () => {
    router.push('/legal/tnc')
  }

  const eulaClick = () => {
    router.push('/legal/eula')
  }

  return (
    <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden">
  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-44 relative gap-4">
    <p className="self-stretch flex-grow-0 flex-shrink-0 w-44 text-sm font-semibold text-left uppercase text-[#111928]">
      COMPANY
    </p>
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
      <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative cursor-pointer">
        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-gray-500">About</p>
      </div>
      <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative cursor-pointer">
        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-gray-500">Blog</p>
      </div>
    </div>
  </div>
  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-44 relative gap-4">
    <p className="self-stretch flex-grow-0 flex-shrink-0 w-44 text-sm font-semibold text-left uppercase text-[#111928]">
      Help and support
    </p>
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
      <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative cursor-pointer">
        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-gray-500">Contact Us</p>
      </div>
    </div>
  </div>
  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-44 relative gap-4">
    <p className="self-stretch flex-grow-0 flex-shrink-0 w-44 text-sm font-semibold text-left uppercase text-[#111928]">
      LEGAL
    </p>
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
      <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative cursor-pointer"
      onClick = {privacyClick}>
        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-gray-500">
          Privacy Policy
        </p>
      </div>
      <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative cursor-pointer"
      onClick = {tncClick}>
        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-gray-500">
          Terms &amp; Conditions
        </p>
      </div>
      <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative cursor-pointer"
      onClick = {eulaClick}>
        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-gray-500">EULA</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Links