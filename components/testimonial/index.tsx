import React from 'react'

const Testimonial = () => {
  return (
    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 py-24 bg-gray-50">
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1280px] gap-16">
    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1216px] gap-6">
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pt-[9px]">
        <svg
          width={48}
          height={36}
          viewBox="0 0 48 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M28.034 36L28.034 21.218C28.034 9.81 35.496 2.078 46 0L47.99 4.302C43.126 6.136 40 11.578 40 16H48V36H28.034ZM0 36V21.218C0 9.81 7.496 2.076 18 0L19.992 4.302C15.126 6.136 12 11.578 12 16H19.966L19.966 36L0 36Z"
            fill="#9CA3AF"
          />
        </svg>
      </div>
      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
        <p className="flex-grow-0 flex-shrink-0 w-[768px] text-2xl font-semibold text-center text-[#111928]">
          "Nustutor is exceptional! As a tutor on the platform, I appreciate its user-friendly interface and efficient matching system that connects me with students in need. Nustutor has provided me with a great opportunity to help students grasp challenging subjects and enhance their academic confidence. I highly recommend it to fellow tutors looking for a supportive and effective platform."
        </p>
      </div>
      <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3.5">
        <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative rounded-[100px]  bg-cover bg-no-repeat bg-center" />
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#111928]">
            Momin Ahmed
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#111928]">
            /
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-gray-500">
            HKUST, Hong Kong
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Testimonial;