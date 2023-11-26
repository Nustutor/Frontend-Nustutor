import React from 'react'

const Links = () => {
  return (
    <div className="flex justify-start items-center flex-grow gap-8">
  <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative cursor-pointer">
    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#111928]">
      Home
    </p>
  </div>
  <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative cursor-pointer">
    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#111928]">
      Features
    </p>
  </div>
  <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative cursor-pointer">
    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#111928]">
      About Us
    </p>
  </div>
  <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative cursor-pointer">
    <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#111928]">
      Contact
    </p>
  </div>
</div>
  )
}

export default Links;