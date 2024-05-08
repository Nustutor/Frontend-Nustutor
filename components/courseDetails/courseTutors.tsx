'use client'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import TutorCTA from './tutorCTA';
import TutorCard from './tutorCard';
import { usePathname } from 'next/navigation';
const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT

const CourseTutors = ({ showCTA }) => {
  const [subjectClasses, setSubjectClasses] = useState([]);

  let uuid: string | null, token: string | null;
  if (typeof window !== 'undefined') {
    uuid = localStorage.getItem('userID');
    token = localStorage.getItem('token');
  }
  const url = decodeURIComponent(usePathname().split('+')[0]);
  const subject = url.split('/')[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${endpoint}/class/subjectclassesbyname/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'uuid': `${uuid}`,
            'name': `${subject}`,
            // Include any additional headers as needed
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setSubjectClasses(data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
                {subjectClasses.map((classData) => (
        <TutorCard
        key={classData.cuid}
        OfferingHero={'/cardHero.png'}
        TutorPfp={'/tutorpfp.png'}
        Suid={classData.suid}
        Title={classData.title}
        TutorName={'Test Tutor'}
        TutorStatus={'undefined'}
        OfferingRate={classData.rate}
      />
        ))}
      </div>
    </div>  
    <TutorCTA showButton = {showCTA}/>
  </div>
  <div className="flex-grow-0 flex-shrink-0 w-[189px] h-[73px] absolute left-[280px] top-[1849px] overflow-hidden" />
</div>
  )
}

export default CourseTutors;