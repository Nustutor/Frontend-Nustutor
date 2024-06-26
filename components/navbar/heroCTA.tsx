'use client'

import React from 'react'
import { useRouter } from 'next/navigation';
const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT

const HeroCTA = () => {
  const router = useRouter();
  let uuid: string | null, token: string | null;
  if (typeof window !== 'undefined') {
    uuid = localStorage.getItem('userID');
    token = localStorage.getItem('token');
  }
  const handleStudent = async () => {
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
        console.log(userData)
        const userId = userData.results[0].uuid;
        console.log('FOO',userId)
        console.log(userData)
        router.push(`/dashboard/${userId}`);
      } else {
        console.error('Error fetching user data:', response.statusText);
        // If there's an error, you can handle it accordingly, e.g., show an error message
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      // If there's an unexpected error, you can handle it accordingly, e.g., show an error message
    }
  }
  const handleTutor = async () => {
    try {
      const response = await fetch(`${endpoint}/tutor/tutorview/gettutor/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'uuid': `${uuid}`,
          // Include any additional headers if needed
        },
      });

      if (response.ok) {
        const tutorAccountData = await response.json();
        console.log("tutordetails", tutorAccountData);
        // Assuming you have a tutor ID in the response, use it in the route
        const tutorId = tutorAccountData[0].tuid;
        localStorage.setItem('tuid', tutorAccountData[0].tuid);
        console.log('tutor id is',localStorage.getItem('tuid'));
        router.push(`/tutor/${tutorId}`);
      } else {
        console.error('Error fetching tutor account data:', response.statusText);
        // If there's an error, route to /tutor
        router.push('/tutor');
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      // If there's an unexpected error, route to /tutor
      router.push('/tutor');
    }
  }
  return (
    <div>
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-4 md:hidden">
  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-1 cursor-pointer"
  onClick={handleStudent}
  >
    <img
      src="/profile.png"
      className="flex-grow-0 flex-shrink-0 w-[37px] h-[39px] rounded-[9099px] object-none"
    />
  </div>
  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-2 rounded-lg bg-[#17c817] cursor-pointer"
  onClick={handleTutor}>
    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-white">
      Switch to Tutoring
    </p>
  </div>
</div>

    <div className="hidden md:flex justify-start items-center flex-grow-0 flex-shrink-0 gap-4" style={{ paddingLeft: "38rem" }}>
  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-1 cursor-pointer"
  onClick={handleStudent}
  >
    <img
      src="/profile.png"
      className="flex-grow-0 flex-shrink-0 w-[37px] h-[39px] rounded-[9099px] object-none"
    />
  </div>
  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-3 py-2 rounded-lg bg-[#17c817] cursor-pointer"
  onClick={handleTutor}>
    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-white">
      Switch to Tutoring
    </p>
  </div>
</div>
</div>
  )
}

export default HeroCTA;