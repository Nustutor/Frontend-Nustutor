'use client'
import StudentDashboard from '@/components/dashboard'
import Loader from '@/components/loader'
import React, { useEffect, useState } from 'react'
const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT

const page = () => {
  let uuid: string | null, token: string | null;
  const [userFullName, setUserFullName] = useState<string | null>(null);
  if (typeof window !== 'undefined') {
    uuid = localStorage.getItem('userID');
    token = localStorage.getItem('token');
  }
  useEffect(() => {
  const getUser = async () => {
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
        const fullName = userData.results[0].fullname;
        setUserFullName(fullName);
        console.log('User Full Name:', userFullName);

      } else {
        console.error('Error fetching user data:', response.statusText);
        // If there's an error, you can handle it accordingly, e.g., show an error message
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      // If there's an unexpected error, you can handle it accordingly, e.g., show an error message
    }
  };  
  getUser();
}, [uuid, token]);

if (userFullName === null) {
  // You can render a loading state or return null
  return(
    <Loader LoaderText={'Loading...'}/>
  )
}
  return (
    <div>
      <StudentDashboard Username={userFullName}/>
    </div>
  )
}

export default page