'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'


const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT
const TutorCard = ({Cuid,OfferingHero,TutorPfp,Suid,Title,TutorName,TutorStatus,OfferingRate,TutorID}) => {

  const router = useRouter();
  const [TutorContact, setTutorContact] = useState();
  const cardClick = () => {
    // Save the cuid in localStorage before navigating to the desired route
    localStorage.setItem('selectedCuid', Cuid);
    router.push(`/offering/${Cuid}`);
  };

  useEffect(() => {

    let uuid: string | null, token: string | null;
    if (typeof window !== 'undefined') {
      uuid = localStorage.getItem('userID');
      token = localStorage.getItem('token');
    }
    const fetchData = async () => {
      try {
        const response = await fetch(`${endpoint}/tutor/gettutorlinks/${TutorID}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'uuid': `${uuid}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setTutorContact(data[0].link);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  
  })

  return (
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-8 cursor-pointer"
    onClick={cardClick}>
  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-8">
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[880px] gap-[18px]">
      <div
        className="flex flex-col justify-center items-start flex-grow relative gap-2.5 p-3 rounded-[20px] bg-white"
        style={{ boxShadow: "0px 14px 42px 0 rgba(8,15,52,0.06)" }}
      >
        <img
          src={OfferingHero}
          className="self-stretch flex-grow-0 flex-shrink-0 h-[113px] rounded-xl object-cover"
        />
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[15px] relative gap-2.5 p-3 rounded-lg bg-[#702dff]/20">
          <p className="flex-grow-0 flex-shrink-0 text-[8px] text-left uppercase text-[#702dff]">
            {Cuid}
          </p>
        </div>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[856px] text-sm font-medium text-left capitalize text-[#202020]">
            {Title}
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[856px] text-sm font-semibold text-left capitalize text-[#202020]/80">
        Starts from PKR {OfferingRate}
        </p>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2 rounded-bl-[20px] rounded-br-[20px]">
          <div className="flex-grow-0 flex-shrink-0 w-6 h-6">
            <img
              src={TutorPfp}
              className="w-6 h-6 absolute left-[-0.5px] top-[0.5px] rounded-[999px] object-none"
            />
          </div>
          <div className="flex flex-col justify-start items-start flex-grow relative gap-1 bg-white">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[824px] text-[10px] font-medium text-left capitalize text-[#202020]">
              {TutorName}
            </p>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[824px] text-[8px] text-left capitalize text-[#202020]">
              {TutorStatus}<br></br>
              {TutorContact}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-5 h-5 absolute left-[838px] top-[22px] gap-2.5 p-1.5 rounded-[50px] bg-[#ccc]/50">
          <svg
            width={8}
            height={8}
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="self-stretch flex-grow relative"
            preserveAspectRatio="none"
          >
            <path
              d="M4.2065 6.93678C4.09317 6.97678 3.9065 6.97678 3.79317 6.93678C2.8265 6.60678 0.666504 5.23011 0.666504 2.89678C0.666504 1.86678 1.4965 1.03345 2.51984 1.03345C3.1265 1.03345 3.66317 1.32678 3.99984 1.78011C4.3365 1.32678 4.8765 1.03345 5.47984 1.03345C6.50317 1.03345 7.33317 1.86678 7.33317 2.89678C7.33317 5.23011 5.17317 6.60678 4.2065 6.93678Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default TutorCard;


