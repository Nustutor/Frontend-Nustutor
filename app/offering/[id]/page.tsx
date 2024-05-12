'use client'

import Footer from '@/components/footer'
import HeroNavbar from '@/components/navbar/heroNav'
import Offering from '@/components/offerings'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT

const CourseOffering = () => {
  let token = localStorage.getItem('token');
  let uuid = localStorage.getItem('userID');
  let suid = localStorage.getItem('selectedSuid');
  const [classData, setClassData] = useState(null);
  const [tutorName, setTutorname] = useState(null);
  const [tutorAbout, setTutorAbout] = useState(null);
  const [tutorSemester, setTutorSemester] = useState(null);

  useEffect(() => {
    // Fetch the cuid from localStorage
    const selectedCuid = localStorage.getItem('selectedCuid');

    // Make a call to your API to get class data using the selectedCuid
    const fetchClassData = async () => {
      try {
        const response = await fetch(`${endpoint}/class/getclass/${selectedCuid}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'uuid': `${uuid}`,
            // Include any additional headers as needed
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setClassData(data[0]); // Assuming the API returns an array with a single class object

        const response2 = await fetch(`${endpoint}/tutor/gettutor/${data[0].tuid}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'uuid': `${uuid}`,
            // Include any additional headers as needed
          },
        });

        if (!response2.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data2 = await response2.json();
        setTutorname(data2[0].fullname);
        setTutorAbout(data2[0].degree);
        setTutorSemester(data2[0].semester)

      } catch (error) {
        console.error('Error fetching class data:', error);
      }
    };

    // Call the function to fetch class data
    fetchClassData();
  }, []);
  return (
    <div>
    <HeroNavbar/>
    {classData && (
        <Offering
          subject={classData.title}
          title={classData.title}
          description={classData.description}
          rate={classData.rate}
          tutorName={tutorName}
          tutorAbout={tutorAbout}
          tutorSemester={tutorSemester}
        />
      )}
    <Footer/>
    </div>
  )
}

export default CourseOffering;