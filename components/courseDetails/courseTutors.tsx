import React from 'react'
import TutorCTA from './tutorCTA';
import TutorCard from './tutorCard';

const CourseTutors = ({showCTA}) => {
  return (
    <div className="flex justify-start items-start relative overflow-hidden gap-2.5 px-[280px] py-16 rounded-tl-[64px] rounded-tr-[64px] bg-[#808080]/[0.08]">
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-16" id ="tutors">
    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-16">
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-6">
        <p className="flex-grow-0 flex-shrink-0 w-[798px] text-5xl font-bold text-center text-black">
          Find a tutor
        </p>
        <p className="flex-grow-0 flex-shrink-0 w-[798px] text-lg text-center text-black">
          Find a suitable tutor as per your requirements.
        </p>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-8">
        <TutorCard OfferingHero={"/cardHero.png"} TutorPfp={undefined} Category={"Computer Science"} OfferingTitle={"I will teach you C-Language Syntax"} TutorName={"Hadi Khan"} TutorStatus={"CS Sophomore at NUST"} OfferingRate={"2000"}/>
        <TutorCard OfferingHero={"/cardHero.png"} TutorPfp={undefined} Category={"Computer Science"} OfferingTitle={"I will teach you Searching & Sorting Algorithims"} TutorName={"Momin Rizvi"} TutorStatus={"Math Major at HKUST"} OfferingRate={"6000"}/>
      </div>
    </div>  
    <TutorCTA showButton = {showCTA}/>
  </div>
  <div className="flex-grow-0 flex-shrink-0 w-[189px] h-[73px] absolute left-[280px] top-[1849px] overflow-hidden" />
</div>
  )
}

export default CourseTutors;