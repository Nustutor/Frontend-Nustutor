
import React, { use } from 'react'
import CategoryCard from './categoryCard';
import {useState, useEffect} from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Loader from '../loader';

const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT

let uuid: string | null, token: string | null;
  if (typeof window !== 'undefined') {
    uuid = localStorage.getItem('userID');
    token = localStorage.getItem('token');
  }

const Categories = () => {

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
    router.push('/courses/viewall');
    }, 1000);
  }

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
    <div className="flex flex-col justify-center items-center  overflow-hidden gap-20 p-16 bg-white">
  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
    <img
      src="/category_hero.png"
      className="flex-grow-0 flex-shrink-0 w-[352px] h-[162px] object-none"
    />
  </div>
  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-[357px]">
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-6">
      <p className="flex-grow-0 flex-shrink-0 w-[768px] text-5xl font-bold text-center text-black">
        Explore Courses By Category
      </p>
      <p className="flex-grow-0 flex-shrink-0 w-[798px] text-lg text-left text-black">
        Discover a wide range of courses covering a variety of subjects, taught by expert
        instructors.
      </p>
    </div>
  </div>
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[1280px] gap-24 bg-white">
    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-16">
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
    {chunkedDegrees.slice(0, 3).map((chunk, index) => (
      <div key={index} className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
        {chunk.map((degree, index) => (
          <CategoryCard key={index} CourseName={capitalizeWords(degree)} TutorNumber={"View"} />
        ))}
      </div>
    ))}
  </div>
  <div>{loading && <Loader LoaderText={'Loading'} />}
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[155px] relative gap-2 px-6 py-3 rounded-[5px] border border-black cursor-pointer">
        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black" onClick = {handleClick}>View All Courses</p>
      </div>
    </div>
    </div>
  </div>
</div>
  )
}

export default Categories;

function capitalizeWords(str) {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}