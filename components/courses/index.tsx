import React from 'react'
import CourseCard from './courseCard';

const Course = () => {
  return (
    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 py-24 bg-[#808080]/[0.08]">
  <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[1440px] overflow-hidden gap-[60px] px-16 py-28 bg-[#808080]/[0.08]">
    <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[768px] gap-4">
      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-6">
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[768px] text-[56px] font-bold text-center text-black">
          Courses
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[768px] text-lg text-center text-black">
          Your Ultimate Guide to learning
        </p>
      </div>
    </div>
    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-16">
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0">
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-4 py-2 border-t-0 border-r-0 border-b border-l-0 border-[#676767] cursor-pointer">
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Popular</p>
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-4 py-2 cursor-pointer">
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Recommended</p>
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-4 py-2 cursor-pointer">
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Best Price</p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-16">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[1312px] gap-8">
            <CourseCard img="/courseImg.png" category="Business" title="Business Management" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."/>
            <CourseCard img="/courseImg.png" category="Business" title="Business Management" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."/>
            <CourseCard img="/courseImg.png" category="Business" title="Business Management" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."/>
            <CourseCard img="/courseImg.png" category="Business" title="Business Management" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."/>
            <CourseCard img="/courseImg.png" category="Business" title="Business Management" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."/>
            <CourseCard img="/courseImg.png" category="Business" title="Business Management" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."/>
        </div>
      </div>
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-4 py-2 rounded-[5px] border border-black">
        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">View All Courses</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Course;