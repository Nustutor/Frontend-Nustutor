'use client'

import TutorDashboard from '@/components/dashboard/Tindex'
import Loader from '@/components/loader'
import HeroNavbar from '@/components/navbar/heroNav'
import TutorNav from '@/components/offerings/tutorNav'
import React, { useEffect, useState } from 'react'
import Tutor from '../page'
import TutorNavbar from '@/components/navbar/tutorNavbar'
const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT

const page = () => {
  let uuid: string | null, token: string | null;
  const [userFullName, setUserFullName] = useState<string | null>(null);
  if (typeof window !== 'undefined') {
    uuid = localStorage.getItem('userID');
    token = localStorage.getItem('token');
  }
  useEffect(() => {
  const getTutor = async () => {
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
        console.log("accdata",tutorAccountData);
        const tuid = tutorAccountData[0].tuid;

        const response2 = await fetch(`${endpoint}/tutor/gettutor/${tuid}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'uuid': `${uuid}`,
            // Include any additional headers if needed
          },
        });

        if (response2.ok)
          {
            const tutorData = await response2.json();
            const fullName = tutorData[0].fullname;
            setUserFullName(fullName);
          }
          else
          {
            console.error('Error fetching tutor data:', response2.statusText);
          }
      } else {
        console.error('Error fetching tutor account data:', response.statusText);
        // If there's an error, route to /tutor
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      // If there's an unexpected error, route to /tutor
    }
  }
  getTutor();
}, [uuid, token]);


if (userFullName === null) {
  // You can render a loading state or return null
  return(
    <Loader LoaderText={'Loading...'}/>
  )
}
  return (
    <div>
      <TutorNavbar/>
      <TutorDashboard Username={userFullName}/>
    </div>
  )
}

export default page;