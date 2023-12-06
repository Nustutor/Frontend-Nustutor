import React from 'react'

const HeroCTA = () => {
  return (
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-4">
  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-1">
    <img
      src="/profile.png"
      className="flex-grow-0 flex-shrink-0 w-[37px] h-[39px] rounded-[9099px] object-none"
    />
  </div>
  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-2 rounded-lg bg-[#17c817]">
    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-white">
      Switch to Tutoring
    </p>
  </div>
</div>
  )
}

export default HeroCTA;