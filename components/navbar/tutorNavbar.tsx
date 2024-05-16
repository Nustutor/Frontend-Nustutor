"use client"
import Logo from './logo';
import Links from './navLinks';
import TutorNav from '../offerings/tutorNav';
import { useState } from 'react';

const TutorNavbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
        return (
            <div>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 py-6 m-2 p-16 md:hidden">
  <div className="flex justify-between items-center w-full">
    <div className="flex items-center">
      <Logo />
    </div>
    <div className="flex items-center">
      <button onClick={toggleDropdown} className="md:hidden px-3 py-2 text-lg">
        Menu
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 top-16 bg-white z-50 shadow-lg rounded-lg">
          <ul className="py-2">
            <Links />
            <TutorNav />
          </ul>
        </div>
      )}
    </div>
  </div>
  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8">
  </div>
</div>

            <div className="hidden md:flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 py-6 m-2 p-16">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-8">
                <Logo/>
                <Links/>
                <TutorNav/>
            </div>
            </div>
            </div>
          )
}

export default TutorNavbar;