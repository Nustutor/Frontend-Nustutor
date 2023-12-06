import React from 'react'
import CategoryCard from './categoryCard';

const Categories = () => {
  return (
    <div className="flex flex-col justify-center items-center  overflow-hidden gap-20 p-16 bg-white">
  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
    <img
      src="/category_hero.png"
      className="flex-grow-0 flex-shrink-0 w-[352px] h-[162px] object-none"
    />
  </div>
  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-[357px]">
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-6">
      <p className="flex-grow-0 flex-shrink-0 w-[768px] text-5xl font-bold text-center text-black">
        Explore Courses By Category
      </p>
      <p className="flex-grow-0 flex-shrink-0 w-[798px] text-lg text-left text-black">
        Discover a wide range of courses covering a variety of subjects, taught by expert
        instructors.
      </p>
    </div>
  </div>
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1280px] gap-24 bg-white">
    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-16">
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
        <CategoryCard CourseName={undefined} TutorNumber={undefined}/>
        <CategoryCard CourseName={undefined} TutorNumber={undefined}/>
        <CategoryCard CourseName={undefined} TutorNumber={undefined}/>
      </div>
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
      <CategoryCard CourseName={"Design"} TutorNumber={"30"}/>
      <CategoryCard CourseName={undefined} TutorNumber={undefined}/>
      <CategoryCard CourseName={undefined} TutorNumber={undefined}/>
      </div>
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
      <CategoryCard CourseName={undefined} TutorNumber={undefined}/>
      <CategoryCard CourseName={undefined} TutorNumber={undefined}/>
      <CategoryCard CourseName={undefined} TutorNumber={undefined}/>
      </div>
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[155px] relative gap-2 px-6 py-3 rounded-[5px] border border-black cursor-pointer">
        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">View All Courses</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Categories;