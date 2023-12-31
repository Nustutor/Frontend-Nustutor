'use client'

import CategoryCard from '@/components/category/categoryCard'
import Footer from '@/components/footer'
import HeroNavbar from '@/components/navbar/heroNav'
import React from 'react'
import {useEffect, useState} from 'react'

const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT

let uuid: string | null, token: string | null;
  if (typeof window !== 'undefined') {
    uuid = localStorage.getItem('userID');
    token = localStorage.getItem('token');
  }

export default function viewAllCourses() {

    const [degrees, setDegrees] = useState([]);

  useEffect(() => {
  const DegreeData = async () => {
    try {
      const response = await fetch(`${endpoint}/subject/degrees`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'uuid': `${uuid}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("data here", data.degree);
        const degrees = data.map(item => `${item.degree}`);
        setDegrees(degrees);

      } else {
        console.error('Error fetching degrees:', response.statusText);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };
  DegreeData();
}, []);

    const chunkedDegrees = [];
    for (let i = 0; i < degrees.length; i += 3) {
    chunkedDegrees.push(degrees.slice(i, i + 3));
    }

    return (
      <div className="flex flex-col justify-start bg-white"> 
    <HeroNavbar/>
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
    {chunkedDegrees.map((chunk, index) => (
      <div key={index} className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
        {chunk.map((degree, index) => (
          <CategoryCard key={index} CourseName={capitalizeWords(degree)} TutorNumber={"View"} />
        ))}
      </div>
    ))}
  </div>
    <Footer/>
      </div>
    )
    }

    function capitalizeWords(string) {
        return string.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
      }