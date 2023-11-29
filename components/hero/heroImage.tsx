import React from 'react'

const HeroImage = () => {
  return (
    <div className="flex flex-col justify-center items-end flex-grow-0 flex-shrink-0 w-[448px] relative gap-10">
    <img
      src="/nustutor_hero.png"
      className="flex-grow-0 flex-shrink-0 w-[483px] h-[386px] object-contain"
    />
  </div>
  )
}

export default HeroImage;