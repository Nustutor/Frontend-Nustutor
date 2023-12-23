import React from 'react'

const CourseCTA = () => {

  const findClick = () => {
    const tutorsList = document.getElementById('tutors');
    if (tutorsList) {
      tutorsList.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-2">
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-12 relative overflow-hidden px-5 py-3 rounded-lg bg-[#7e3af2] cursor-pointer"
      onClick = {findClick}>
        <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">
          Find tutor
        </p>
      </div>
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-12 relative overflow-hidden px-5 py-3 rounded-lg border border-gray-200 cursor-pointer">
        <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1f2a37]">
          Save course
        </p>
      </div>
    </div>
  </div>
  )
}

export default CourseCTA;