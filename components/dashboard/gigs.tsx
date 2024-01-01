'use client'

import React, { useState, useEffect } from 'react';
import TutorCard from '../courseDetails/tutorCard';
import { useRouter } from 'next/navigation';
const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT

const Offers = ({ OfferText }: { OfferText: string }, url: string) => {
  const [tutorClasses, setTutorClasses] = useState([]);
  const router = useRouter();
  let tuid = localStorage.getItem('tuid');
  let token = localStorage.getItem('token');
  let uuid = localStorage.getItem('userID');
  console.log(tuid);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${endpoint}/class/tutorclasses/${tuid}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'uuid': `${uuid}`,
            // Include any additional headers if needed
          },
        });
        const data = await response.json();
        console.log(data);
        setTutorClasses(data);
      } catch (error) {
        console.error('Error fetching tutor classes:', error);
      }
    };

    if (tuid) {
      fetchData();
    }
  }, [tuid]);

  const handleClick = () => {
    router.push(`/tutor/${tuid}/addClass`);
  };

  return (
    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-5">
      <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
        <p className="self-stretch flex-grow w-[820px] h-6 text-base font-medium text-left capitalize text-[#202020]">
          {OfferText}
        </p>
        <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-3">
          <div
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-2 rounded-lg bg-[#5508d8] cursor-pointer"
            onClick={handleClick}
          >
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-white">Add Class</p>
          </div>
        </div>
      </div>

      {tutorClasses.map((tutorClass) => (
        <TutorCard
          key={tutorClass.cuid}
          OfferingHero={'/cardHero.png'}
          TutorPfp={'/tutorpfp.png'}
          Suid={tutorClass.suid}
          Title={tutorClass.title}
          TutorName={'Test Tutor'}
          TutorStatus={'undefined'}
          OfferingRate={tutorClass.rate} 
          Cuid={tutorClass.cuid}        />
      ))}
    </div>
  );
};

export default Offers;
