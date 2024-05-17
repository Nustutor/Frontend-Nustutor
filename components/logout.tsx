"use client"
import React from 'react'

const Logout = () => {
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/';
    }
    return (
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3 py-2 rounded-[40px]"
    onClick = {handleLogout}>
      <svg
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M5.93359 5.54016C6.14026 3.14016 7.37359 2.16016 10.0736 2.16016H10.1603C13.1403 2.16016 14.3336 3.35349 14.3336 6.33349V10.6802C14.3336 13.6602 13.1403 14.8535 10.1603 14.8535H10.0736C7.39359 14.8535 6.16026 13.8868 5.94026 11.5268"
          stroke="#F13E3E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.99975 8.5H2.41309"
          stroke="#F13E3E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.90033 6.2666L1.66699 8.49994L3.90033 10.7333"
          stroke="#F13E3E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p className="flex-grow w-[118px] text-base font-medium text-left text-[#f13e3e] cursor-pointer">Logout</p>
    </div>
    )
    }
export default Logout;