'use client'
import react, { useEffect, useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import HeroNavbar from '../navbar/heroNav'
import { usePathname, useRouter } from 'next/navigation'
import CourseCard from '../courses/courseCard'

const endpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT
let uuid: string | null, token: string | null;
  if (typeof window !== 'undefined') {
    uuid = localStorage.getItem('userID');
    token = localStorage.getItem('token');
  }

const SearchResults = () => {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [subjects, setSubjects] = useState([]);
    const searchTerm = decodeURIComponent(usePathname().split('/')[2]);
        useEffect(() => {
        setSearch(searchTerm);
        console.log(searchTerm);

        if (search) {
          const getSubjectsBySearch = async (search) => {
            
            const response = await fetch(`${endpoint}/subject/search`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'uuid': `${uuid}`,
                'term': `${search}`,
              },
            });
          
            if (response.ok) {
                const data = await response.json();
                const transformedData = data.map(item => ({ [item.name]: item.code }));
                setSubjects(transformedData);
              } else {
                console.error("No results found");
              }
          };
          getSubjectsBySearch(search);
        }
        
      }, [search]);
    return (
        <div className="flex flex-col justify-start bg-white">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold text-center mt-10 mb-5">Search Results for {search}</h1>
                    <p className="text-lg text-center mb-10">Showing {subjects.length} results</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
  <div className="flex flex-wrap">
    {subjects.map((subject, i) => {
      const [name, code] = Object.entries(subject)[0];
      return (
        <div className="w-1/2" key={i}>
          <CourseCard 
            img="/courseImg.png" 
            category={code} 
            title={name} 
            description="Learn from experts, apply what you learn, and advance your career or studies."
          />
        </div>
      );
    })}
  </div>

        </div>
        </div>
    )
}

export default SearchResults;