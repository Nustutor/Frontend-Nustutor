'use client'

import React, { useState, useEffect } from 'react';
import TutorCard from '../courseDetails/tutorCard';
import { useRouter } from 'next/navigation';

const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

const EnrolledClasses = ({ OfferText }: { OfferText: string }, url: string) => {
  const [userClasses, setUserClasses] = useState([]);
  const router = useRouter();
  let token = localStorage.getItem('token');
  let uuid = localStorage.getItem('userID');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${endpoint}/class/userclasses`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'uuid': `${uuid}`,
            // Include any additional headers if needed
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setUserClasses(data);
      } catch (error) {
        console.error('Error fetching user classes:', error);
      }
    };

    if (uuid) {
      fetchData();
    }
  }, [uuid, token]);

  return (
    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-5">
      <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
        <p className="self-stretch flex-grow w-[820px] h-6 text-base font-medium text-left capitalize text-[#202020]">
          {OfferText}
        </p>
        <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-3">
          {/* Add any additional elements if needed */}
        </div>
      </div>

      {userClasses.map((userClass) => (
        <TutorCard
          key={userClass.cuid}
          OfferingHero={'/cardHero.png'}
          TutorPfp={'/tutorpfp.png'}
          Suid={userClass.suid}
          Title={userClass.title}
          TutorName={'Test Tutor'}
          TutorStatus={'undefined'}
          OfferingRate={userClass.rate} 
          Cuid={undefined}        />
      ))}
    </div>
  );
};

export default EnrolledClasses;
