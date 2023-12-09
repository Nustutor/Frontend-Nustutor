import React from 'react'
import TutorCard from '../courseDetails/tutorCard';

const Offers = () => {
  return (
    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-5">
  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
    <p className="self-stretch flex-grow w-[820px] h-6 text-base font-medium text-left capitalize text-[#202020]">
      Sent Offers
    </p>
    <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-3">
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-6 h-6 relative gap-2.5 p-1.5 rounded-[50px] border border-[#9e9e9e]">
        <svg
          width={12}
          height={12}
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="self-stretch flex-grow relative"
          preserveAspectRatio="none"
        >
          <path
            d="M7.49992 9.96004L4.23992 6.70004C3.85492 6.31504 3.85492 5.68504 4.23992 5.30004L7.49992 2.04004"
            stroke="#9E9E9E"
            stroke-width="1.5"
            stroke-miterlimit={10}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-6 h-6 relative gap-2.5 p-1.5 rounded-[50px] border border-[#9e9e9e]">
        <svg
          width={12}
          height={12}
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="self-stretch flex-grow relative"
          preserveAspectRatio="none"
        >
          <path
            d="M4.45508 9.96004L7.71508 6.70004C8.10008 6.31504 8.10008 5.68504 7.71508 5.30004L4.45508 2.04004"
            stroke="#9E9E9E"
            stroke-width="1.5"
            stroke-miterlimit={10}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
  <TutorCard OfferingHero={'/cardHero.png'} TutorPfp={undefined} Category={undefined} OfferingTitle={undefined} TutorName={undefined} TutorStatus={undefined} OfferingRate={undefined}/>
  <TutorCard OfferingHero={'/cardHero.png'} TutorPfp={undefined} Category={undefined} OfferingTitle={undefined} TutorName={undefined} TutorStatus={undefined} OfferingRate={undefined}/>
  <TutorCard OfferingHero={'/cardHero.png'} TutorPfp={undefined} Category={undefined} OfferingTitle={undefined} TutorName={undefined} TutorStatus={undefined} OfferingRate={undefined}/>
</div>
  )
}

export default Offers;