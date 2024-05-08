import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import CourseCard from '../courses/courseCard';

const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT

const CategoryCourses = () => {

  const category = decodeURIComponent(usePathname().split('/courses/')[1]);
  console.log(category);

  let uuid: string | null, token: string | null;
  if (typeof window !== 'undefined') {
    uuid = localStorage.getItem('userID');
    token = localStorage.getItem('token');
  }
      
  interface Course {
    id: number;
    title: string;
    category: string;
  }
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    if (category) {
      const getSubjectsByDegree = async (degree) => {
        console.log('checkdegree',degree);
        
        const response = await fetch(`${endpoint}/subject/degree_subjects/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'uuid': `${uuid}`,
            'degree': `${degree}`,
          },
        });
      
        if (response.ok) {
          const data = await response.json();
          const subjects = data.results;
          console.log('FOOsubs',subjects);
          setSubjects(subjects);
          return subjects;
        } else {
          console.error("No degree found");
        }
      };
      getSubjectsByDegree(category);
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
      <div className="flex flex-wrap">
    {subjects.map((subject, i) => (
        <CourseCard 
          key={i}
          img="/courseImg.png" 
          category={subject.code} 
          title={subject.name} 
          description="Learn from experts, apply what you learn, and advance your career or studies."
        />
    ))}
  </div>
</div>
    </div>
  );
};

export default CategoryCourses;
