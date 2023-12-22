import React from 'react'
import TutorCard from '../courseDetails/tutorCard';
import { Button } from '@mui/material';

const Offers = ({OfferText}: {OfferText: string}) => {
  return (
    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-5">
  <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
    <p className="self-stretch flex-grow w-[820px] h-6 text-base font-medium text-left capitalize text-[#202020]">
      {OfferText}
    </p>
    <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-3">
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-2 rounded-lg bg-[#5508d8] cursor-pointer">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-white">
            Add Class
          </p>
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