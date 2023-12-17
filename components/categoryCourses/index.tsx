import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import CourseCard from '../courses/courseCard';

const CategoryCourses = () => {

    const category = usePathname().split('/courses/')[1].replace(/%20/g, '');
    
  interface Course {
    id: number;
    title: string;
    category: string;
  }
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    if (category) {
      // Get courses from the backend
       //using dummy data for now
      const dummyData = [
        { id: 1, title: 'Course 1', category: 'Category A' },
        { id: 2, title: 'Course 2', category: 'Category A' },
      ];
      const filteredCourses = dummyData.filter((course) => course.category === category);
      setCourses(filteredCourses);
    }
  }, [category]);

  return (
    <div className="flex flex-col justify-center items-center gap-16">
  <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-[78px] py-16 bg-white">
    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-8">
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-8">
        <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 gap-6">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative">
            <p className="flex-grow-0 flex-shrink-0 text-5xl font-bold text-center text-black">
              {category}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

      
    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-x-auto gap-16">
  <div className="flex flex-wrap justify-start items-start flex-grow-0 flex-shrink-0 max-w-[1312px] gap-8">
    <CourseCard img="/courseImg.png" category={category} title="Course Name" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."/>
    <CourseCard img="/courseImg.png" category={category} title="Course Name" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."/>
    <CourseCard img="/courseImg.png" category={category} title="Course Name" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."/>
    <CourseCard img="/courseImg.png" category={category} title="Course Name" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."/>
    <CourseCard img="/courseImg.png" category={category} title="Course Name" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."/>
    <CourseCard img="/courseImg.png" category={category} title="Course Name" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."/>
  </div>
    </div>
    </div>

  );
};

export default CategoryCourses;
