'use client'

import React, {useState, useEffect} from 'react'
import CourseCard from './courseCard';
import { useRouter } from 'next/navigation';
import { get } from 'http';

const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT

const Course = () => {

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [subID, setSubID] = useState('[]');
  const handleviewAll = () => {
    setLoading(true);
    setTimeout(() => {
      router.push(`/availableCourses`);
    }, 700);

  }
  const [degree, setDegree] = useState('');
  const [subjects, setSubjects] = useState([]);
  let uuid: string | null, token: string | null;
  let suid: string | null, userDegree: string | null;
  if (typeof window !== 'undefined') {
    uuid = localStorage.getItem('userID');
    token = localStorage.getItem('token');
  }
  useEffect(() => {
    const handleDegree = async () => {
    console.log(uuid)
    console.log('FOO',token)
    try {
      const response = await fetch(`${endpoint}/user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'uuid': `${uuid}`,
          // Include any additional headers if needed
        },
      });

      if (response.ok) {
        const userData = await response.json();
        // Assuming you have a user ID in the response, use it in the route
        console.log('FOOwehere', userData)
        const degree = userData.results[0].degree;
        setDegree(degree);
        localStorage.setItem('userDegree', userData.results[0].degree);
        console.log('degreeFOO',localStorage.getItem('userDegree'));
      } else {
        console.error('Error fetching user data:', response.statusText);
        // If there's an error, you can handle it accordingly, e.g., show an error message
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      // If there's an unexpected error, you can handle it accordingly, e.g., show an error message
    };
  };

    handleDegree();
    
  }, []);

  useEffect(() => {
    if (degree) {
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
          console.log('FOOsubs2',subjects[0].suid);  
          setSubjects(subjects);
          return subjects;
        } else {
          console.error("No degree found");
        }
      };
      getSubjectsByDegree(degree);
    }
    
  }, [degree]);

  return (
    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 py-12 md:py-24 bg-[#808080]/[0.08]">
      <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-full md:w-[1440px] overflow-hidden gap-[30px] md:gap-[60px] px-6 md:px-16 py-14 md:py-28 bg-[#808080]/[0.08]">
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-full md:w-[768px] gap-4">
          <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-[24px] md:text-[56px] font-bold text-center text-black">
              Courses
            </p>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-lg md:text-lg text-center text-black">
              Your Ultimate Guide to learning
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-10 md:gap-16">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0">
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-4 py-2 border-t-0 border-r-0 border-b border-l-0 border-[#676767] cursor-pointer">
              <p className="flex-grow-0 flex-shrink-0 text-base md:text-lg text-left text-black">Available Courses</p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-x-auto gap-6 md:gap-16">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-full gap-4 md:w-[1312px]">
              {subjects.slice(0, 15).map((subject, i) => (
                <CourseCard 
                  key={i}
                  img="/courseImg.png"
                  category={subject.code}
                  title={subject.name}
                  description="Learn from experts, apply what you learn, and advance your career or studies." 
                  suid={subject.suid}  
                />
              ))}
            </div>
          </div>
          <div>{loading && <Loader LoaderText={'Loading'} />}
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-4 py-2 rounded-[5px] border border-black cursor-pointer" onClick={handleviewAll}>
              <p className="flex-grow-0 flex-shrink-0 text-base md:text-lg text-left text-black">View All Courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Course;