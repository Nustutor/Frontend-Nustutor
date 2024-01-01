"use client"
import Navbar from '@/components/navbar';
import Footer
 from '@/components/footer';
import Course from '@/components/courses/viewAllCourses';
export default function CoursesPage(){
  return (
    <div className="flex flex-col justify-start bg-white">
    
        <Navbar />
      <Course />
        <Footer />
    </div>
  );
};