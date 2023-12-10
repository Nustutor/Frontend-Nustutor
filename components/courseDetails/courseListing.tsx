import React from 'react'
import CourseCTA from './courseCTA';

const CourseListing = ({Level,Category,Title,CourseDescription, CourseHero}) => {
  return (
    <div className="flex flex-col justify-start items-start gap-16">
  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-[78px] py-16 bg-white">
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-8">
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-8">
        <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-black/60">
          {Level} &gt; {Category} &gt; {Title}
        </p>
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-8">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
            <img
              src={CourseHero}
              className="flex-grow-0 flex-shrink-0 w-[640px] h-[462px] object-none"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-8">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-8">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-6">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
              <p className="flex-grow-0 flex-shrink-0 text-5xl font-bold text-left text-black">
                {Title}
              </p>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[612px] relative">
              <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-black">
                {CourseDescription}
              </p>
            </div>
          </div>
        </div>
        <CourseCTA/>
      </div>
    </div>
  </div>
</div>
  )
}

export default CourseListing;